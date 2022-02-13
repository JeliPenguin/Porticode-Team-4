import os
from datetime import datetime, timedelta
from typing import List
from fastapi import Depends, FastAPI, HTTPException, status, File, UploadFile
from fastapi.responses import FileResponse
from fastapi.security import OAuth2AuthorizationCodeBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from . import models, schemas, crud
from .database import SessionLocal, engine


app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/create", response_model=schemas.User)
def create_user(user:schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_student_id(db=db, student_id=user.student_id)
    if db_user:
        raise HTTPException(status_code=400, detail="User already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/", response_model=List[schemas.User])
def read_events(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.get("/users/{student_id}", response_model=schemas.User)
def read_user(student_id: int, db: Session = Depends(get_db)):
    user = crud.get_user_by_student_id(db=db, student_id=student_id)
    return user

@app.put("/users/{student_id}/update-location", response_model=schemas.User)
def update_user_location(student_id: int, lat: float, lng: float, db: Session = Depends(get_db)):
    user = crud.update_location_by_student_id(db=db, student_id=student_id, lat=lat, lng=lng)
    return user

@app.get("/events/", response_model=List[schemas.Event])
def read_events(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    events = crud.get_events(db, skip=skip, limit=limit)
    return events

@app.get("/events/{event_id}", response_model=schemas.Event)
def read_events(event_id: int, db: Session = Depends(get_db)):
    db_event = crud.get_event_by_id(db=db, id=event_id)
    return db_event

@app.post("/event/create", response_model=schemas.Event)
def create_event(event:schemas.EventCreate, db: Session = Depends(get_db)):
    return crud.create_event(db=db, event=event)

@app.post("/event/{event_id}/add-user", response_model=schemas.UserEvent)
def create_event(student_id: int, event_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_student_id(db=db, student_id=student_id)
    db_event = crud.get_event_by_id(db=db, id=event_id)
    print("user id: ", db_user.id)
    print("event id: ", db_event.id)
    return crud.add_user_to_event(db, user_id=db_user.id, event_id=db_event.id)

@app.post("/event/{event_id}/users-attending", response_model=List[schemas.User])
def read_users_attending_event(event_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    db_user_events = crud.get_user_events_by_event_id(event_id=event_id, db=db, skip=skip, limit=limit)
    users_attending = []
    for db_user_event in db_user_events:
        db_user = crud.get_user_by_id(db=db, id=db_user_event.user_id)
        users_attending.append(db_user)
    return users_attending

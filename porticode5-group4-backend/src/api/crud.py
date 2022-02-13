from numpy import float64
from sqlalchemy.orm import Session
from datetime import datetime
from . import models, schemas

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        email=user.email,
        student_id=user.student_id,
        full_name=user.full_name,
        lat=user.lat,
        lng=user.lng,
        last_update=datetime.now()
        )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def get_user_by_student_id(db: Session, student_id: int):
    return db.query(models.User).filter(models.User.student_id == student_id).first()

def get_user_by_id(db: Session, id: int):
    return db.query(models.User).filter(models.User.id == id).first()

def create_event(db: Session, event: schemas.EventCreate):
    db_event = models.Event(
        name=event.name,
        location = event.location,
        start_time = event.start_time,
        end_time = event.end_time
        )
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event

def get_events(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Event).offset(skip).limit(limit).all()

def get_event_by_id(db: Session, id: int):
    return db.query(models.Event).filter(models.Event.id == id).first()

def add_user_to_event(db: Session, user_id: int, event_id: int):
    db_user_event = models.UserEvent(
        user_id=user_id,
        event_id=event_id
    )
    db.add(db_user_event)
    db.commit()
    db.refresh(db_user_event)
    return db_user_event

def get_user_events(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.UserEvent).offset(skip).limit(limit).all()

def get_user_events_by_event_id(event_id: int , db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.UserEvent).filter(models.UserEvent.event_id == event_id).offset(skip).limit(limit).all()

def update_location_by_student_id(db: Session, student_id: int, lat: float, lng: float):
    db_user = get_user_by_student_id(db=db, student_id=student_id)
    db_user.lat = lat
    db_user.lng = lng
    db_user.last_update = datetime.now()
    db.commit()
    db.refresh(db_user)
    return db_user


from pydantic import BaseModel
import datetime
from typing import List, Optional
from pydantic import BaseModel

class UserEventBase(BaseModel):
    user_id: int
    event_id: int

class UserEventCreate(UserEventBase):
    pass

class UserEvent(UserEventBase):
    id: int

    class Config:
        orm_mode = True

# User model
class UserBase(BaseModel):
    email: str
    student_id: int
    full_name: str
    lat: float
    lng: float

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    last_update: datetime.datetime

    class Config:
        orm_mode = True

# Event model
class EventBase(BaseModel):
    name: str
    location: str
    start_time: datetime.datetime
    end_time: datetime.datetime

class EventCreate(EventBase):
    pass

class Event(EventBase):
    id: int

    class Config:
        orm_mode = True

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship

from sqlalchemy import create_engine, Column, Integer, String, Table, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base, relationship

from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    student_id = Column(Integer, unique=True, index=True)
    full_name = Column(String)
    lat = Column(Float)
    lng = Column(Float)
    last_update = Column(DateTime)

class UserEvent(Base):
    __tablename__ = 'user_events'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    event_id = Column(Integer, ForeignKey('events.id'))

class Event(Base):
    __tablename__ = "events"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    location = Column(String)
    start_time = Column(DateTime)
    end_time = Column(DateTime)



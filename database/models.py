from .databse import Base
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql import func
from sqlalchemy import Column, String, Integer


#--------Modelo da tabela que será criada no PostgreSQL-------

class Posts(Base):
	__tablename__ = 'posts'

	id = Column(Integer, primary_key=True)
	title = Column(String, nullable=False)
	description = Column(String, nullable=True)
	body = Column(String, nullable=False)
	created_at = Column(TIMESTAMP(timezone=False), server_default=func.now())
	updated_at = Column(TIMESTAMP(timezone=False), nullable=True, onupdate=func.now())

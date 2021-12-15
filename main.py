from fastapi import FastAPI
from routes import posts
from database import models
from database.databse import engine
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

app.include_router(posts.router)


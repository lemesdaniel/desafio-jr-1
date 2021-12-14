from fastapi import FastAPI

app = FastAPI()

POSTS =['testezin']

@app.get("/posts")
def get_all():
	return POSTS
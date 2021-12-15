from fastapi import APIRouter, Depends, HTTPException, status
from starlette.responses import Response
from database.databse import get_db
from sqlalchemy.orm.session import Session
import schemas
from database import models

router = APIRouter(
	tags=['Posts']
)

POSTS =['testezin']


#-------Metodos CRUD--------

#----------GET--------
#------GET By Date --------
@router.get("/posts/filterbydate")
def get_by_date(start:str, end:str, db: Session= Depends(get_db)):
	posts = db.query(models.Posts).filter(models.Posts.created_at.between(start, end)).all()
	return {'data': posts}


@router.get("/posts")
def get_all(db: Session= Depends(get_db)):
	posts = db.query(models.Posts).all()
	return {'data': posts}

#--------GET By ID ------------
@router.get("/posts/{id}")
def get_byI_ID(id: int, db: Session= Depends(get_db)):
	post_required = db.query(models.Posts).filter(models.Posts.id == id).first()
	if not post_required:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
					detail={"message": "ID not found."})
	return {'data': post_required}


#---------POST---------
@router.post("/posts", status_code=201)
def creat_post(post:schemas.PostEntry, db: Session= Depends(get_db)):
	new_post = models.Posts(**post.dict())
	db.add(new_post)
	try:
		db.commit()
		db.refresh(new_post)
		return {'data': new_post}
	except Exception as e:
		return {'message': e.args}

#----------DELETE--------
@router.delete("/posts/{id}", status_code=204)
def delete_post(id: int, db: Session= Depends(get_db)):
	requested_post = db.query(models.Posts).filter(models.Posts.id == id).first()
	if not requested_post:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
					detail={"message": "ID not found."})
	db.delete(requested_post)
	db.commit()

	return Response(status_code=204)

#---------PATCH------
@router.patch("/posts/{id}", status_code=202)
def update_post(id: int, post: schemas.PostPatch, db: Session= Depends(get_db)):
	post_query = db.query(models.Posts).filter(models.Posts.id == id)
	post_exist = post_query.first()

	if not post_exist:
		raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
						detail={"message": "Post Not Found"})
	post_entry = post.dict()
	for key in post_entry:
		if post_entry[key] != None:
			pass
		else:
			if key == 'title':
				post_entry[key] = post_exist.title
			elif key == 'body':
				post_entry[key] = post_exist.body
			elif key == 'description':
				post_entry[key] = post_exist.description
	post_query.update(post_entry, synchronize_session=False)
	db.commit()

	return {'message': 'Post updated'}
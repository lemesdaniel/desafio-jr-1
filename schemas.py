from pydantic import BaseModel
from typing import Optional

class PostEntry(BaseModel):
	title: str
	description: Optional[str]
	body: str

class PostPatch(BaseModel):
	title: Optional[str]
	description: Optional[str]
	body: Optional[str]	
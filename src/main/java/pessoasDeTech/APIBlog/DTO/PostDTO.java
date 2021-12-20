package pessoasDeTech.APIBlog.DTO;

import java.time.Instant;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pessoasDeTech.APIBlog.entities.Post;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {
	
	private Long id;
	private String title;
	private String description;
	private String body;
	private Instant createdAt;
	private LocalDateTime updatedAt;
	
	public PostDTO(Post entity) {
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.description = entity.getDescription();
		this.body = entity.getBody();
		this.createdAt = entity.getCreatedAt();
		this.updatedAt = entity.getUpdatedAt();
	}
}

package pessoasDeTech.APIBlog.controller.exceptions;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FieldMessage implements Serializable{

	private static final long serialVersionUID = 1L;

	private String fieldName;
	private String message;
}

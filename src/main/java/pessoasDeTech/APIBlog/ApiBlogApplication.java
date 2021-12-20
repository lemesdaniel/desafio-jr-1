package pessoasDeTech.APIBlog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

@SpringBootApplication
@EnableSpringDataWebSupport
public class ApiBlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiBlogApplication.class, args);
	}

}

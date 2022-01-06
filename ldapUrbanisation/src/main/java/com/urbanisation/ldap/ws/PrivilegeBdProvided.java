package com.urbanisation.ldap.ws;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanisation.ldap.beans.PrivilegeBD;
import com.urbanisation.ldap.service.PrivilegeBdService;

@CrossOrigin
@RestController
@RequestMapping("/bd/privilege")
public class PrivilegeBdProvided {
	
	@Autowired
	private PrivilegeBdService privilegeBdService;

	@PostMapping("/add")
	public <S extends PrivilegeBD> S save(@RequestBody S entity) {
		return privilegeBdService.save(entity);
	}

	@GetMapping("/findall")
	public List<PrivilegeBD> findAll() {
		return privilegeBdService.findAll();
	}
	@GetMapping("/find/id/{id}")
	public Optional<PrivilegeBD> findById(@PathVariable("id") Long id) {
		return privilegeBdService.findById(id);
	}

	@DeleteMapping("/delete/id/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		privilegeBdService.deleteById(id);
	}
	
	
	

}

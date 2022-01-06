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

import com.urbanisation.ldap.beans.RoleBD;
import com.urbanisation.ldap.service.RoleBdService;

@CrossOrigin
@RestController
@RequestMapping("/bd/role")
public class RoleBdProvided {

	@Autowired
	public RoleBdService roleBdService;

	@PostMapping("/add")
	public RoleBD save(@RequestBody RoleBD entity) {
		return roleBdService.save(entity);
	}

	@GetMapping("/findall")
	public List<RoleBD> findAll() {
		return roleBdService.findAll();
	}

	@GetMapping("/find/id/{id}")
	public Optional<RoleBD> findById(@PathVariable("id") Long id) {
		return roleBdService.findById(id);
	}
	
	@DeleteMapping("/delete/id/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		roleBdService.deleteById(id);
	}
	
	@PostMapping("/add/uid/{uid}")
	public String save(@RequestBody RoleBD entity, @PathVariable("uid") String uid) {
		return roleBdService.save(entity, uid);
	}
	
	@DeleteMapping("/delete/uid/{uid}/role/{role}")
	public String deleteByUid(@PathVariable("uid") String uid, @PathVariable("role") String role) {
		return roleBdService.deleteByUid(uid, role);
	}
	
	
	
}

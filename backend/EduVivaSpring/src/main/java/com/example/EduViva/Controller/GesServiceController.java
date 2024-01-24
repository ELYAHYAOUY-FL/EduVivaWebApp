package com.example.EduViva.Controller;

import com.example.EduViva.Entity.GesService;
import com.example.EduViva.Service.GesServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*" )
@RequestMapping("api/v1/service")
public class GesServiceController {
    @Autowired
    private GesServiceService gesservices;
    @PostMapping(value = "/save")
    public String saveService(@RequestBody GesService services)
    {
        gesservices.saveorUpdate(services);
        return services.getId();
    }
    @GetMapping(value = "/getAll")
    public Iterable<GesService>getServices()
    {

        return gesservices.listAll();
    }
    @PutMapping(value = "/update/{id}")
    private GesService update(@RequestBody GesService service, @PathVariable(name="id") String id )
    {
        service.setId(id);
        gesservices.saveorUpdate(service);
        return service;
    }
    @DeleteMapping(value = "/delete/{id}")
    private void deleteService ( @PathVariable("id") String id )
    {
        gesservices.deleteService(id);
    }
    @RequestMapping(value = "/search/{id}")
    private GesService getServices(@PathVariable(name="id") String Serviceid)
    {
        return gesservices.getServiceByID(Serviceid);
    }
}

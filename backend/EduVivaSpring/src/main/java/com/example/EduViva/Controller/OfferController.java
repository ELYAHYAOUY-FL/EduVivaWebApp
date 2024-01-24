package com.example.EduViva.Controller;

import com.example.EduViva.Entity.Company;
import com.example.EduViva.Entity.Offer;
import com.example.EduViva.Service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v3/offer")
public class OfferController {

    @Autowired
    private OfferService offerService;

    @PostMapping(value = "/save")
    public String saveOffer(@RequestBody Offer offer) {
        offerService.saveOrUpdate(offer);
        return offer.getId();
    }

    @GetMapping(value = "/getAll")
    public Iterable<Offer> getAllOffers() {
        return offerService.getAllOffers();
    }

    @PutMapping(value = "/update/{id}")
    private Offer updateOffer(@RequestBody Offer offer, @PathVariable(name = "id") String id) {
        offer.setId(id);
        offerService.saveOrUpdate(offer);
        return offer;
    }
    @DeleteMapping(value = "/delete/{id}")
    private void deleteOffer(@PathVariable("id") String id) {
        offerService.deleteOffer(id);
    }

    @RequestMapping(value = "/search/{id}")
    private Offer getOffer(@PathVariable(name = "id") String offerId) {
        return offerService.getOfferById(offerId);
    }
}

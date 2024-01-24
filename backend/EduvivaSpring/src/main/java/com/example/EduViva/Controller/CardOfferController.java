package com.example.EduViva.Controller;

import com.example.EduViva.Entity.CardOffer;
import com.example.EduViva.Entity.Company;
import com.example.EduViva.Service.CardOfferService;
import com.example.EduViva.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v4/Offercard")
public class CardOfferController {
    @Autowired
    private CardOfferService cardService;

    @PostMapping(value = "/save")
    public String saveOfferCard(@RequestBody CardOffer card) {
        cardService.saveOrUpdate(card);
        return card.getId();

    }
    @GetMapping(value = "/getAll")
    public Iterable<CardOffer> getAllCards() {
        return cardService.getAllCards();
    }
    @PutMapping(value = "/update/{id}")
    private CardOffer updateCard(@RequestBody CardOffer card, @PathVariable(name = "id") String id) {
        card.setId(id);
        cardService.saveOrUpdate(card);
        return card;
    }
    @DeleteMapping(value = "/delete/{id}")
    private void deleteCard(@PathVariable("id") String id) {
        cardService.deleteCard(id);
    }

    @RequestMapping(value = "/search/{id}")
    private CardOffer getCard(@PathVariable(name = "id") String cardId) {
        return cardService.getCardById(cardId);
    }
    @PostMapping(value = "/uploadImage/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void uploadImage(@PathVariable String companyId, @RequestParam("file") MultipartFile file) {
        cardService.uploadImage(companyId, file);
    }
}

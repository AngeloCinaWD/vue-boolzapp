var app = new Vue ({
  el: "#app",
  data: {
    indiceContattoAttivo: 0,
    contatti: [
      {
        nomeContatto: "Michele",
        immagineContatto: "img/avatar_1.jpg",
        messaggiChatInviati: ["Lo sai che ha aperto una nuova pizzeria?", "daje", "SSS"],
        messaggiChatRicevuti: ["Si ma preferirei andare al cinema", "ok"]
      },
      {
        nomeContatto: "Fabio",
        immagineContatto: "img/avatar_2.jpg",
        messaggiChatInviati: ["ggggggg", "daje", "rrr"],
        messaggiChatRicevuti: ["Si"]
      },
      {
        nomeContatto: "Samuele",
        immagineContatto: "img/avatar_3.jpg",
        messaggiChatInviati: ["Lo sai che ha aperto una nuova pizzeria?", "daje", "SSS"],
        messaggiChatRicevuti: ["Si ma preferirei andare al cinema", "ok"]
      },
      {
        nomeContatto: "Luisa",
        immagineContatto: "img/avatar_4.jpg",
        messaggiChatInviati: ["ggggggg", "daje", "rrr"],
        messaggiChatRicevuti: ["Si"]
      }
    ]
  },
  methods: {
    attivaContatto: function (indiceAttivo) {
      this.indiceContattoAttivo = indiceAttivo;
    }
  }

});

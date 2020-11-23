var app = new Vue ({
  el: "#app",
  data: {
    indiceContattoAttivo: 0,
    contatti: [
      {
        nomeContatto: "Michele",
        immagineContatto: "img/avatar_1.jpg",
        messaggiChat: [
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          }
        ]
      },
      {
        nomeContatto: "Fabio",
        immagineContatto: "img/avatar_2.jpg",
        messaggiChat: [
          {
            testo: "sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          }
        ]
      },
      {
        nomeContatto: "Samuele",
        immagineContatto: "img/avatar_3.jpg",
        messaggiChat: [
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          }
        ]
      },
      {
        nomeContatto: "Luisa",
        immagineContatto: "img/avatar_4.jpg",
        messaggiChat: [
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          }
        ]
      }
    ]
  },
  methods: {
    attivaContatto: function (indiceAttivo) {
      this.indiceContattoAttivo = indiceAttivo;
    }
  }

});

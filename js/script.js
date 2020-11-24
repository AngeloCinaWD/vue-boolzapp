var app = new Vue ({
  el: "#app",
  data: {
    inputMessaggio: "",
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
            timeInfo: "20 11 2020 10:52:15"
          }
        ],
      },
      {
        nomeContatto: "Fabio",
        immagineContatto: "img/avatar_2.jpg",
        messaggiChat: [
          {
            testo: "pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          }
        ]
      },
      {
        nomeContatto: "Samuele",
        immagineContatto: "img/avatar_3.jpg",
        messaggiChat: [
          {
            testo: "Lo sai ?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "Si",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "al cinema",
            tipo: "sentMessage",
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
            testo: "fjsfjhhhh?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "ma",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "La fessa che tieni",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "a soreta",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03"
          },
          {
            testo: "mammt",
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
    },
    inviaMessaggio: function () {
      this.contatti[this.indiceContattoAttivo].messaggiChat.push({testo: this.inputMessaggio, tipo: "sentMessage", timeInfo: "20 11 2020 10:52:15"});
      this.inputMessaggio = "";
    }


  }
});

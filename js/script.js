var app = new Vue ({
  el: "#app",
  data: {
    inputMessaggio: "",
    inputSearch: "",
    indiceContattoAttivo: 0,
    lastOnline:"20 11 2020 10:52:03",
    contatti: [
      {
        nomeContatto: "Michele",
        immagineContatto: "img/avatar_1.jpg",
        visibile: true,
        messaggiChat: [
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "Si ma preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          }
        ],
      },
      {
        nomeContatto: "Fabio",
        immagineContatto: "img/avatar_2.jpg",
        visibile: true,
        messaggiChat: [
          {
            testo: "pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          }
        ]
      },
      {
        nomeContatto: "Samuele",
        immagineContatto: "img/avatar_3.jpg",
        visibile: true,
        messaggiChat: [
          {
            testo: "Lo sai ?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "Si",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "preferirei andare al cinema",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "al cinema",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "Lo sai che ha aperto una nuova pizzeria?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          }
        ]
      },
      {
        nomeContatto: "Luisa",
        immagineContatto: "img/avatar_4.jpg",
        visibile: true,
        messaggiChat: [
          {
            testo: "fjsfjhhhh?",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "ma",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "La fessa che tieni",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "a soreta",
            tipo: "receivedMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          },
          {
            testo: "mammt",
            tipo: "sentMessage",
            timeInfo: "20 11 2020 10:52:03",
            opzioniMessaggio: "eliminaMessaggioNo"
          }
        ]
      }
    ]
  },
  methods: {
    attivaContatto: function (indiceAttivo) {
      this.indiceContattoAttivo = indiceAttivo;
    },

    dataTime: function () {
      var today = new Date();
      var date = today.getDate()+' '+(today.getMonth()+1)+' '+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      return dateTime;
    },

    inviaMessaggio: function () {
      if (this.inputMessaggio != "")
      this.contatti[this.indiceContattoAttivo].messaggiChat.push({testo: this.inputMessaggio, tipo: "sentMessage", timeInfo: this.dataTime (), opzioniMessaggio: "eliminaMessaggioNo"});
      this.inputMessaggio = "";
      this.ritardoRisposta();
    },

    messaggioRisposta: function () {
      if (this.inputMessaggio != "")
      this.lastOnline = this.dataTime ();
      this.contatti[this.indiceContattoAttivo].messaggiChat.push({testo: "ok", tipo: "receivedMessage", timeInfo: this.dataTime (), opzioniMessaggio: "eliminaMessaggioNo"});
      this.inputMessaggio = "";
    },

    ritardoRisposta: function () {
      setTimeout (this.messaggioRisposta, 1000);
    },

    cercaChat: function(){
      this.contatti.forEach((elemento) => {
        let inputInserito = app.inputSearch;
        let nome = elemento.nomeContatto;

        inputInserito = inputInserito.toLowerCase();
        nome = nome.toLowerCase();

        if (nome.includes(inputInserito)) {
          elemento.visibile = true;
        } else {
          elemento.visibile = false;
        }
      });
    },

    displayOpzioniMessaggio: function(i) {
      if (this.contatti[this.indiceContattoAttivo].messaggiChat[i].opzioniMessaggio === "eliminaMessaggioNo") {
        this.contatti[this.indiceContattoAttivo].messaggiChat[i].opzioniMessaggio = "eliminaMessaggioSi";
      } else {
        this.contatti[this.indiceContattoAttivo].messaggiChat[i].opzioniMessaggio = "eliminaMessaggioNo"
      };
    },

    deleteMessage: function (i) {
      this.contatti[this.indiceContattoAttivo].messaggiChat.splice(i, 1);
    }

  }
});

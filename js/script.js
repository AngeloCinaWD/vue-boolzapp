var app = new Vue ({
  el: "#app",
  data: {
    inputMessaggio: "",
    inputSearch: "",
    indiceContattoAttivo: 0,
    contatti: [
      {
        nomeContatto: "Michele",
        immagineContatto: "img/avatar_1.jpg",
        visibile: true,
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
        visibile: true,
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
        visibile: true,
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

    dataTime: function () {
      var today = new Date();
      var date = today.getDate()+' '+(today.getMonth()+1)+' '+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      return dateTime;
    },

    inviaMessaggio: function () {
      if (this.inputMessaggio != "")
      this.contatti[this.indiceContattoAttivo].messaggiChat.push({testo: this.inputMessaggio, tipo: "sentMessage", timeInfo: this.dataTime ()});
      // this.inputMessaggio = "";
    },

    messaggioRisposta: function () {
      if (this.inputMessaggio != "")
      this.contatti[this.indiceContattoAttivo].messaggiChat.push({testo: "ok", tipo: "receivedMessage", timeInfo: this.dataTime ()});
      this.inputMessaggio = "";
    },

    ritardoRisposta: function () {
      setTimeout (this.messaggioRisposta, 1000);
    },

    // cercaChat: function () {
    //   console.log(this.inputSearch);
    //   if (this.inputSearch != "")
    //   var inputinserito = this.inputSearch;
    //   this.contatti = this.contatti.filter((element) => {
    //     // if (element.nomeContatto.includes(inputinserito)) {
    //       return element.nomeContatto.includes(inputinserito)
    //     // }
    //   });
    // }

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
    }



  }
});

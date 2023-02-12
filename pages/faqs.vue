<template>
  <div id="app">
    <div class="flex w-full mt-20 mb-10 lg:px-20 px-4">
      <div class="container mx-auto w-full bg-white lg:px-10 px-2  pb-10 rounded-lg shadow-2xl">
        <div class="flex w-full lg:text-5xl text-2xl font-bold pt-4 mb-4">
          Kanunay Nga Mga Pangutana
        </div>
        <accordion>
          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <div class="flex w-full justify-between bg-green-600 text-white lg:px-4 px-2  lg:text-left py-2 border border-green-600 cursor-pointer rounded-t-lg" @click="click()">
                <label class="lg:text-2xl md:text-lg text-sm font-bold">Koleksyon sa Impormasyon Ug Paggamit</label>
                <svg
                  v-if="hidden"
                  class="rotate fill-current text-white mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" /></svg>
                <svg
                  v-if="unhidden"
                  class="down fill-current text-white mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" /></svg>
              </div>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <div v-if="isVisible" class="px-4 py-4 border border-green-600">
                <p class="text-justify leading-loose text-gray-800">
                  Samtang ginagamit ang among Serbisyo, mahimo ka namo nga hangyoon sa paghatag sa pipila ka personal nga impormasyon aron mailhan ka ug ang kasayuran nga mahimong magamit sa pagkontak o sa pag ila nimo. Ang kasayuran sa personal nga pag-ila ("Personal nga Impormasyon") mahimong maglakip, apan dili limitado sa:
                  <ul class="pt-4 pl-6">
                    <li class="kinidiay">
                      Pangalan
                    </li>
                    <li class="kinidiay">
                      Email address
                    </li>
                    <li class="kinidiay">
                      Numero sa Telepono
                    </li>
                    <li class="kinidiay">
                      Address
                    </li>
                  </ul>
                </p>
              </div>
            </template>
          </accordion-item>

          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <div class="flex w-full justify-between lg:text-2xl text-lg font-bold bg-green-600 text-white lg:px-4 px-2 lg:text-left text-center py-2 border border-green-600 cursor-pointer rounded-t-lg" @click="click1()">
                Mga Accounts
                <svg
                  v-if="hidden1"
                  class="rotate fill-current text-white mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" /></svg>
                <svg
                  v-if="unhidden1"
                  class="down fill-current text-white mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" /></svg>
              </div>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <div class="px-4 py-4 border border-green-600">
                <p class="text-justify leading-loose text-gray-800">
                  Sa pag himo ug account kanamo, kinahanglan nga ang mga impormasyon tukma, kumpleto ug “up-to-date” sa tanan nga mga panahon. Ang pagkapakyas sa pagbuhat sa ingon nahimo nga paglapas sa mga Termino, nga mahimong magresulta sa diha-diha nga pagtapos sa imong account sa among Serbisyo. Ikaw ang responsable sa pagpanalipod sa password nga gigamit nimo aron ma-access ang Serbisyo ug alang sa bisan unsang mga kalihokan o mga aksyon sa ilawom sa imong password, kung ang imong password naa sa among Serbisyo o serbisyo sa third-party. Miuyon ka nga dili ibutyag ang imong password sa bisan kinsa. Gikinahanglan nimo nga pahibal-on kami dayon sa makhibalo ka nga naay sa bisan unsang paglapas sa seguridad o dili pagtugot sa paggamit sa imong account.
                </p>
              </div>
            </template>
          </accordion-item>

          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <div class="flex w-full justify-between lg:text-2xl text-lg font-bold bg-green-600 text-white lg:px-4 px-2 lg:text-left text-center py-2 border border-green-600 cursor-pointer rounded-t-lg" @click="click2()">
                Paghatud
                <svg
                  v-if="hidden2"
                  class="rotate fill-current text-white mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" /></svg>
                <svg
                  v-if="unhidden2"
                  class="down fill-current text-white mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                ><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" /></svg>
              </div>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <div class="px-4 py-4 border border-green-600">
                <p class="text-justify leading-loose text-gray-800">
                  Sa pagdeliver gikinahanglan nga tama ug sakto ang impormasyon nga imong gi butang sa Address, Ang “Pamalengke” mag pahibalo kanimo kung unsa na ang kasamtangan sa imong pinalit.Ang paghatud sa imong pinalit mudepende sa oras sa imong pag order.
                </p>
                <p class="text-justify leading-loose text-gray-800">
                  <b>Oras sa paghatud</b>
                </p>
                <p class="text-justify leading-loose text-gray-800">
                  Oras sa pag order 12:00 a.m.- 11:59 a.m. Oras sa Paghatud 1:00 p.m. - 5:00 p.m.
                </p>
                <p class="text-justify leading-loose text-gray-800">
                  Oras sa pag order 12:00 p.m. -11:59 p.m. Oras sa Paghatud Pagka ugma  9:00 a.m. - 12:00 p.m.
                </p>
              </div>
            </template>
          </accordion-item>
        </accordion>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '~/components/accordion/accordion.vue'
import AccordionItem from '~/components/accordion/accordion-item.vue'

export default {
  auth: false,
  name: 'App',
  components: {
    Accordion,
    AccordionItem
  },
  data () {
    return {
      isVisible: true,
      rotate: false,
      hidden: true,
      unhidden: false,
      hidden1: true,
      unhidden1: false,
      hidden2: true,
      unhidden2: false
    }
  },
  methods: {
    click () {
      this.hidden = !this.hidden
      this.unhidden = !this.unhidden
    },
    click1 () {
      this.hidden1 = !this.hidden1
      this.unhidden1 = !this.unhidden1
    },
    click2 () {
      this.hidden2 = !this.hidden2
      this.unhidden2 = !this.unhidden2
    }
  }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.kinidiay {
    list-style-type: circle
}
.rotate {
    -moz-transition: all .5s linear;
    -webkit-transition: all .5s linear;
    transition: all .5s linear;
}
.down {
    -moz-transform:rotate(90deg);
    -webkit-transform:rotate(90deg);
    transform:rotate(90deg);
}
</style>

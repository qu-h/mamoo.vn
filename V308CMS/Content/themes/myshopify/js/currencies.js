var Currency = {
  rates: {"USD":1.0,"EUR":1.07282,"GBP":1.28436,"CAD":0.747248,"ARS":0.0654348,"AUD":0.755849,"BRL":0.321783,"CLP":0.00154188,"CNY":0.145278,"CYP":0.397899,"CZK":0.0400371,"DKK":0.144209,"EEK":0.0706676,"HKD":0.128639,"HUF":0.00342046,"ISK":0.0090811,"INR":0.0154789,"JMD":0.00778017,"JPY":0.00921345,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0537836,"NZD":0.704502,"NOK":0.117489,"PLN":0.253612,"SGD":0.716542,"SKK":21.5517,"SIT":175.439,"ZAR":0.0752739,"KRW":0.000875357,"SEK":0.111577,"CHF":1.00361,"TWD":0.0328816,"UYU":0.0351679,"MYR":0.226732,"BSD":1.0,"CRC":0.001791,"RON":0.237081,"PHP":0.0201508,"AED":0.272257,"VEB":9.85416e-05,"IDR":7.52299e-05,"TRY":0.273473,"THB":0.0291192,"TTD":0.148363,"ILS":0.27281,"SYP":0.0046657,"XCD":0.37037,"COP":0.00035205,"RUB":0.0177913,"HRK":0.144309,"KZT":0.003211,"TZS":0.00044763,"XPT":978.322,"SAR":0.266644,"NIO":0.033612,"LAK":0.00012191,"OMR":2.5974,"AMD":0.00205723,"CDF":0.000722171,"KPW":0.00769209,"SPL":6.0,"KES":0.00967119,"ZWD":0.00276319,"KHR":0.000249602,"MVR":0.0648929,"GTQ":0.136333,"BZD":0.500357,"BYR":5.31915e-05,"LYD":0.719424,"DZD":0.00906854,"BIF":0.00059039,"GIP":1.28436,"BOB":0.144356,"XOF":0.00163551,"STD":4.3375e-05,"NGN":0.00327333,"PGK":0.314498,"ERN":0.065189,"MWK":0.00137891,"CUP":0.0377358,"GMD":0.0220955,"CVE":0.00966854,"BTN":0.0154789,"XAF":0.00163551,"UGX":0.00027678,"MAD":0.0998392,"MNT":0.00041589,"LSL":0.0752739,"XAG":18.3014,"TOP":0.442247,"SHP":1.28436,"RSD":0.00867951,"HTG":0.014457,"MGA":0.00031251,"MZN":0.0152752,"FKP":1.28436,"BWP":0.0960369,"HNL":0.042624,"PYG":0.00018092,"JEP":1.28436,"EGP":0.0550791,"LBP":0.00066116,"ANG":0.558659,"WST":0.390445,"TVD":0.755849,"GYD":0.00481997,"GGP":1.28436,"NPR":0.00967792,"KMF":0.00218068,"IRR":3.083e-05,"XPD":776.493,"SRD":0.132512,"TMM":5.71429e-05,"SZL":0.0752739,"MOP":0.124892,"BMD":1.0,"XPF":0.00899026,"ETB":0.0436921,"JOD":1.40944,"MDL":0.051811,"MRO":0.00278199,"YER":0.00399765,"BAM":0.548526,"AWG":0.558659,"PEN":0.30749,"VEF":0.0985416,"SLL":0.00013286,"KYD":1.21951,"AOA":0.00602746,"TND":0.43539,"TJS":0.117798,"SCR":0.07385,"LKR":0.0066125,"DJF":0.00559534,"GNF":0.00010952,"VUV":0.0089945,"SDG":0.149925,"IMP":1.28436,"GEL":0.419304,"FJD":0.4801,"DOP":0.0211406,"XDR":1.36556,"MUR":0.0282615,"MMK":0.0007359,"LRD":0.010638,"BBD":0.5,"ZMK":0.000106046,"XAU":1289.27,"VND":4.39702e-05,"UAH":0.0372648,"TMT":0.285714,"IQD":0.000856856,"BGN":0.548429,"KGS":0.0146438,"RWF":0.00121106,"BHD":2.65288,"UZS":0.00027182,"PKR":0.00953789,"MKD":0.0174518,"AFN":0.0147945,"NAD":0.0752739,"BDT":0.0122251,"AZN":0.596508,"SOS":0.001731,"QAR":0.274627,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.12825,"ALL":0.0079372,"BND":0.716542,"KWD":3.2798,"GHS":0.236408,"ZMW":0.106046,"XBT":1194.0,"NTD":0.0337206,"BYN":0.531915},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};
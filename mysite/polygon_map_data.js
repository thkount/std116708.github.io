/*    
	@licstart  The following is the entire license notice for the 
	JavaScript code in this page.

	Copyright (C) 2014  
	Konstantinos Grammatikakis, Electronic and Computer Engineer, 
	sparkaf11@gmail.com

	The JavaScript code in this page is free software: you can
	redistribute it and/or modify it under the terms of the GNU
	General Public License (GNU GPL) as published by the Free Software
	Foundation, either version 3 of the License, or (at your option)
	any later version.  The code is distributed WITHOUT ANY WARRANTY;
	without even the implied warranty of MERCHANTABILITY or FITNESS
	FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

	As additional permission under GNU GPL version 3 section 7, you
	may distribute non-source (e.g., minimized or compacted) forms of
	that code without the copy of the GNU GPL normally required by
	section 4, provided you include this license notice and a URL
	through which recipients can access the Corresponding Source.   


	@licend  The above is the entire license notice
	for the JavaScript code in this page.
*/

// Construct the polygon Array.
var syntetDimwn = {
	init: new google.maps.LatLng(35.336781, 25.125142),
	archanwn: new google.maps.LatLng(35.336781, 25.125142),
	viannou: new google.maps.LatLng(35.039683, 25.436892),
	gortinas: new google.maps.LatLng(35.05936,25.010621),
	irakleiou: new google.maps.LatLng(35.336781, 25.125142),
	maleviziou: new google.maps.LatLng(35.319085, 24.998674),
	minwa: new google.maps.LatLng(35.148339, 25.311484),
	faistoy: new google.maps.LatLng(35.056196, 24.856119), 
	xersonisou: new google.maps.LatLng(35.294532,25.341825)
}; 








var polygonCoords = [


	/*********************     Dimos Maleviziou           *////////////////////////////////////////////////
	
	{
		paths: [
			new google.maps.LatLng(35.395979,24.992909),
			new google.maps.LatLng(35.395988,24.992960),
			new google.maps.LatLng(35.395898,24.992985),
			new google.maps.LatLng(35.395883,24.992928)
		],
		
		dimos: "maleviziou",
		oikismos: "Αχλάδα", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος Δημοτικού Σχολείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.362620,25.021985),
			new google.maps.LatLng(35.362598,25.021942),
			new google.maps.LatLng(35.362467,25.022143),
			new google.maps.LatLng(35.362504,25.022180)
		],
		dimos: "maleviziou",
		oikismos: "Ροδιά", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος Δημοτικού Σχολείου Ροδιάς"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.364385,25.021572),
			new google.maps.LatLng(35.364488,25.021896),
			new google.maps.LatLng(35.364035,25.022105),
			new google.maps.LatLng(35.363928,25.021754)
		],
		dimos: "maleviziou",
		oikismos: "Ροδιά", 
		onoma: "",
		perigrafi: "Γήπεδο Ροδιάς"
	},
	{
		paths: [
			new google.maps.LatLng(35.407553,25.014971),
			new google.maps.LatLng(35.407317,25.014893),
			new google.maps.LatLng(35.407291,25.015038),
			new google.maps.LatLng(35.407514,25.015107)
		],
		dimos: "maleviziou",
		oikismos: "Αγ. Πελαγία", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος Δημοτικού Σχολείου Αγ. Πελαγίας"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.407516,25.015319),
			new google.maps.LatLng(35.406906,25.015188),
			new google.maps.LatLng(35.406852,25.015958),
			new google.maps.LatLng(35.407481,25.016207)
		],
		dimos: "maleviziou",
		oikismos: "Αγ. Πελαγία", 
		onoma: "",
		perigrafi: "Χώρος στάθμευσης αυτοκινήτων"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.331337,25.048313),
			new google.maps.LatLng(35.330269,25.048463),
			new google.maps.LatLng(35.330357,25.049257),
			new google.maps.LatLng(35.331407,25.049064)
		],
		dimos: "maleviziou",
		oikismos: "Γάζι", 
		onoma: "",
		perigrafi: "Γήπεδο Αλμυρού"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.327853,25.052433),
			new google.maps.LatLng(35.326243,25.053130),
			new google.maps.LatLng(35.326462,25.054429),
			new google.maps.LatLng(35.328046,25.053334)
		],
		dimos: "maleviziou",
		oikismos: "Γάζι", 
		onoma: "",
		perigrafi: "Γήπεδο Βαρδινογιάννειο"
		
	},
	
	{
		paths: [
			new google.maps.LatLng(35.326326,25.065608),
			new google.maps.LatLng(35.326216,25.065648),
			new google.maps.LatLng(35.326236,25.065849),
			new google.maps.LatLng(35.326341,25.065815)
		],
		dimos: "maleviziou",
		oikismos: "Γάζι", 
		onoma: "",
		perigrafi: "Πάρκινγκ Δήμου"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.325367,25.067027),
			new google.maps.LatLng(35.324831,25.067081),
			new google.maps.LatLng(35.324849,25.067231),
			new google.maps.LatLng(35.325385,25.067145)
		],
		dimos: "maleviziou",
		oikismos: "Γάζι", 
		onoma: "",
		perigrafi: "Πάρκινγκ Δήμου"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.329667,25.073722),
			new google.maps.LatLng(35.329396,25.073840),
			new google.maps.LatLng(35.329407,25.074030),
			new google.maps.LatLng(35.329919,25.074006)
		],
		dimos: "maleviziou",
		oikismos: "Γάζι", 
		onoma: "",
		perigrafi: "Πλατεία Πολυδρόσου"
		
	},
	
	
	{
		paths: [
			new google.maps.LatLng(35.335508,25.069535),
			new google.maps.LatLng(35.334431,25.069519),
			new google.maps.LatLng(35.334431,25.070693),
			new google.maps.LatLng(35.335678,25.070575)
		],
		dimos: "maleviziou",
		oikismos: "Γάζι", 
		onoma: "",
		perigrafi: "Aκάλυπτος χώρος απέναντι από το Τεχνόπολις"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.308795,25.045623),
			new google.maps.LatLng(35.308640,25.045993),
			new google.maps.LatLng(35.308544,25.045939),
			new google.maps.LatLng(35.308738,25.045575)
		],
		dimos: "maleviziou",
		oikismos: "Καβροχώρι", 
		onoma: "",
		perigrafi: "Πάνω πλατεία"
	},	
	
	
	{
		paths: [
			new google.maps.LatLng(35.289558,25.056687),
			new google.maps.LatLng(35.289321,25.057299),
			new google.maps.LatLng(35.288529,25.056848),
			new google.maps.LatLng(35.288770,25.056258)
		],
		dimos: "maleviziou",
		oikismos: "Καλέσσα", 
		onoma: "",
		perigrafi: "Γήπεδο Καλεσσίων"
	},	
	
	{
		paths: [
			new google.maps.LatLng(35.305109,25.016368),
			new google.maps.LatLng(35.304672,25.017285),
			new google.maps.LatLng(35.305179,25.017613),
			new google.maps.LatLng(35.305600,25.016695)
		],
		dimos: "maleviziou",
		oikismos: "Τύλισος", 
		onoma: "",
		perigrafi: "Γήπεδο Τυλίσου"
	},	
	
	{
		paths: [
			new google.maps.LatLng(35.296436,25.019656),
			new google.maps.LatLng(35.296200,25.019667),
			new google.maps.LatLng(35.296270,25.020037),
			new google.maps.LatLng(35.296502,25.019994)
		],
		dimos: "maleviziou",
		oikismos: "Τύλισος", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου Τυλίσου"
	},	

	{
		paths: [
			new google.maps.LatLng(35.381377,24.959165),
			new google.maps.LatLng(35.381213,24.959017),
			new google.maps.LatLng(35.380935,24.959355),
			new google.maps.LatLng(35.381252,24.959521)
		],
		dimos: "maleviziou",
		oikismos: "Φόδελε", 
		onoma: "",
		perigrafi: "Πλατεία Φόδελε"
	},	
	
	{
		paths: [
			new google.maps.LatLng(35.347410,24.970894),
			new google.maps.LatLng(35.347108,24.970856),
			new google.maps.LatLng(35.347021,24.971586),
			new google.maps.LatLng(35.347309,24.971629)
		],
		dimos: "maleviziou",
		oikismos: "Μάραθος", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου Μάραθος"
	},	
	
	{
		paths: [
			new google.maps.LatLng(35.289008,25.013246),
			new google.maps.LatLng(35.288835,25.013190),
			new google.maps.LatLng(35.288757,25.013477),
			new google.maps.LatLng(35.288929,25.013544)
		],
		dimos: "maleviziou",
		oikismos: "Mονή", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου Μονής"
	},	
	
		
	{
		paths: [
			new google.maps.LatLng(35.315311,24.946201),
			new google.maps.LatLng(35.315167,24.946057),
			new google.maps.LatLng(35.315062,24.946204),
			new google.maps.LatLng(35.315243,24.946365)
		],
		dimos: "maleviziou",
		oikismos: "Αστυράκι", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
		
	},
	
	{
		paths: [
			new google.maps.LatLng(35.224912,24.997255),
			new google.maps.LatLng(35.224863,24.997255),
			new google.maps.LatLng(35.224855,24.997386),
			new google.maps.LatLng(35.224907,24.997381)
		],
		dimos: "maleviziou",
		oikismos: "Σαρχός", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.224798,24.997225),
			new google.maps.LatLng(35.224804,24.997059),
			new google.maps.LatLng(35.224936,24.997188),
			new google.maps.LatLng(35.224894,24.997212)
		],
		dimos: "maleviziou",
		oikismos: "Σαρχός", 
		onoma: "",
		perigrafi: "Πλατεία γύρω από το σχολείο"
	},
	{
		paths: [
		new google.maps.LatLng(35.276723,25.028771),
		new google.maps.LatLng(35.276526,25.028725),
		new google.maps.LatLng(35.276493,25.028945),
		new google.maps.LatLng(35.276692,25.029009)
		],
		dimos: "maleviziou",
		oikismos: "Κεραμούτσι", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.252125,24.989905),
			new google.maps.LatLng(35.252431,24.989873),
			new google.maps.LatLng(35.252497,24.990157),
			new google.maps.LatLng(35.252409,24.990238)
		],
		dimos: "maleviziou",
		oikismos: "Λουτράκι", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.353743,24.923711),
			new google.maps.LatLng(35.353756,24.924087),
			new google.maps.LatLng(35.353555,24.924092),
			new google.maps.LatLng(35.353553,24.923746)
		],
		dimos: "maleviziou",
		oikismos: "Δαμάστα", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.294392,24.925699),
			new google.maps.LatLng(35.294304,24.925650),
			new google.maps.LatLng(35.294276,24.925752),
			new google.maps.LatLng(35.293969,24.925712),
			new google.maps.LatLng(35.293945,24.925894),
			new google.maps.LatLng(35.294280,24.925822),
			new google.maps.LatLng(35.294368,24.925817)
	],
		dimos: "maleviziou",
		oikismos: "Γωνιές", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.293794,24.924832),
			new google.maps.LatLng(35.293851,24.924942),
			new google.maps.LatLng(35.293783,24.924969),
			new google.maps.LatLng(35.293748,24.924859)
	],
		dimos: "maleviziou",
		oikismos: "Γωνιές", 
		onoma: "",
		perigrafi: "Περιοχή Ανεμόμυλος δίπλα από το σχολείο"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.312035,24.909914),
			new google.maps.LatLng(35.311833,24.909890),
			new google.maps.LatLng(35.311822,24.910002),
			new google.maps.LatLng(35.312017,24.910035)
	],
		dimos: "maleviziou",
		oikismos: "Καμαριώτης", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
		
	},
	
	{
		paths: [
			new google.maps.LatLng(35.321568,24.921702),
			new google.maps.LatLng(35.321354,24.921729),
			new google.maps.LatLng(35.321358,24.921933),
			new google.maps.LatLng(35.321555,24.921927)
	],
		dimos: "maleviziou",
		oikismos: "Αηδονοχώρι", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	},

	{
		paths: [
			new google.maps.LatLng(35.259841,25.007704),
			new google.maps.LatLng(35.259953,25.007715),
			new google.maps.LatLng(35.259948,25.007823),
			new google.maps.LatLng(35.259845,25.007809)
	],
		dimos: "maleviziou",
		oikismos: "Κορφές", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.274119,25.010749),
			new google.maps.LatLng(35.273708,25.010746),
			new google.maps.LatLng(35.273837,25.011224),
			new google.maps.LatLng(35.274194,25.010958)
	],
		dimos: "maleviziou",
		oikismos: "Καμάρι", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.235156,25.001892),
			new google.maps.LatLng(35.234942,25.001898),
			new google.maps.LatLng(35.234940,25.002115),
			new google.maps.LatLng(35.235170,25.002109)
	],
		dimos: "maleviziou",
		oikismos: "Κιθαρίδα", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος δημοτικού σχολείου"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.236142013,24.986920649),
			new google.maps.LatLng(35.235912471,24.987569199),
			new google.maps.LatLng(35.235064946,24.987133682),
			new google.maps.LatLng(35.235294402,24.986495313)
	],
		dimos: "maleviziou",
		oikismos: "Κρουσώνα , Κιθαρίδα", 
		onoma: "",
		perigrafi: "Γήπεδο Κρουσώνα"
	},

	{
		paths: [
			new google.maps.LatLng(35.225687,24.971503),
			new google.maps.LatLng(35.225582,24.972133),
			new google.maps.LatLng(35.225258,24.972031),
			new google.maps.LatLng(35.225234,24.971347)
		],
		dimos: "maleviziou",
		oikismos: "Αγία Ειρήνη", 
		onoma: "",
		perigrafi: "Προαύλιος χώρος Μονής"
	},
	
	
	/*********************      TELOS Dimos Maleviziou           *////////////////////////////////////////////////
	
	
	/************************ dimos MINWA *******************************/	
	
	
	
	{
		paths: [
			new google.maps.LatLng(35.145398,25.267627),
			new google.maps.LatLng(35.145113,25.267696),
			new google.maps.LatLng(35.145393,25.269172),
			new google.maps.LatLng(35.145525,25.268340)
		],
		dimos: "minwa",
		oikismos: "Αρκαλοχώρι", 
		onoma: "arkaloxori_kolimvitirio",
		perigrafi: "Κολυμβητήριο"
	},

	{
		paths: [
			new google.maps.LatLng(35.139704,25.272455),
			new google.maps.LatLng(35.139599,25.271865),
			new google.maps.LatLng(35.137642,25.272465),
			new google.maps.LatLng(35.138340,25.273495)
		],
		dimos: "minwa",
		oikismos: "Αρκαλοχώρι", 
		onoma: "arkaloxori_ekthesiako_kentro",
		perigrafi: "Εκθεσιακό Κέντρο"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.126380,25.244597),
			new google.maps.LatLng(35.126301,25.245002),
			new google.maps.LatLng(35.126132,25.244833),
			new google.maps.LatLng(35.126141,25.244670)
		],
		dimos: "minwa",
		oikismos: "Αγία Σεμνή", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.148543,25.237438),
			new google.maps.LatLng(35.148624,25.237943),
			new google.maps.LatLng(35.148453,25.238071),
			new google.maps.LatLng(35.148343,25.237548)
		],
		dimos: "minwa",
		oikismos: "Ζήντα", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
		
	},
	
	{
		paths: [
			new google.maps.LatLng(35.158247,25.258612),
			new google.maps.LatLng(35.157986,25.258606),
			new google.maps.LatLng(35.157993,25.258834),
			new google.maps.LatLng(35.158256,25.258818)
		],
		dimos: "minwa",
		oikismos: "Αρχοντικό", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.162486,25.246687),
			new google.maps.LatLng(35.162330,25.246719),
			new google.maps.LatLng(35.162332,25.246850),
			new google.maps.LatLng(35.162501,25.246770)
		],
		dimos: "minwa",
		oikismos: "Χουμέρι", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.136508,25.264918),
			new google.maps.LatLng(35.136052,25.264985),
			new google.maps.LatLng(35.136118,25.265352),
			new google.maps.LatLng(35.136515,25.265229)
		],
		dimos: "minwa",
		oikismos: "Γάσι", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.127017,25.264287),
			new google.maps.LatLng(35.127025,25.264596),
			new google.maps.LatLng(35.126707,25.264470),
			new google.maps.LatLng(35.126707,25.264411)
		],
		dimos: "minwa",
		oikismos: "Μουσούτα", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.122456,25.234260),
			new google.maps.LatLng(35.122469,25.234566),
			new google.maps.LatLng(35.122690,25.234571),
			new google.maps.LatLng(35.122684,25.234239)
		],
		dimos: "minwa",
		oikismos: "Μιλιαρίσι", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.156061,25.228077),
			new google.maps.LatLng(35.156124,25.228273),
			new google.maps.LatLng(35.156010,25.228375),
			new google.maps.LatLng(35.155885,25.228174)
		],
		dimos: "minwa",
		oikismos: "Πατσίδερος", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.077015,25.245131),
			new google.maps.LatLng(35.076881,25.244769),
			new google.maps.LatLng(35.076776,25.244852),
			new google.maps.LatLng(35.076923,25.245193)
		],
		dimos: "minwa",
		oikismos: "Γαρίπα", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.079261,25.229539),
			new google.maps.LatLng(35.079232,25.229746),
			new google.maps.LatLng(35.079067,25.230167),
			new google.maps.LatLng(35.079002,25.229765)
		],
		dimos: "minwa",
		oikismos: "Δραπέτι", 
		onoma: "plateia",
	    perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.033069,25.291190),
			new google.maps.LatLng(35.032852,25.291190),
			new google.maps.LatLng(35.032838,25.291504),
			new google.maps.LatLng(35.033065,25.291509)
		],
		dimos: "minwa",
		oikismos: "Δεμάτι", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.093591,25.283119),
			new google.maps.LatLng(35.093325,25.283146),
			new google.maps.LatLng(35.093299,25.283277),
			new google.maps.LatLng(35.093623,25.283261)
		],
		dimos: "minwa",
		oikismos: "Ίνι ", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.090632,25.271223),
			new google.maps.LatLng(35.090647,25.271406),
			new google.maps.LatLng(35.090443,25.271438),
			new google.maps.LatLng(35.090428,25.271333)
		],
		dimos: "minwa",
		oikismos: "Μαχαιρά", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.105019,25.275545),
			new google.maps.LatLng(35.105083,25.275861),
			new google.maps.LatLng(35.104774,25.275976),
			new google.maps.LatLng(35.104699,25.275654)
		],
		dimos: "minwa",
		oikismos: "Μοναστηράκι ", 
		onoma: "parko",
		perigrafi: "Πάρκο"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.205133,25.269542),
			new google.maps.LatLng(35.205146,25.269636),
			new google.maps.LatLng(35.204999,25.269646),
			new google.maps.LatLng(35.205010,25.269451)
		],
		dimos: "minwa",
		oikismos: "Ζωφόροι", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.215965,25.264859),
			new google.maps.LatLng(35.215989,25.264936),
			new google.maps.LatLng(35.215880,25.265038),
			new google.maps.LatLng(35.215842,25.264977)
		],
		dimos: "minwa",
		oikismos: "Σαμπάς", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.194873,25.246362),
			new google.maps.LatLng(35.194893,25.246534),
			new google.maps.LatLng(35.194722,25.246603),
			new google.maps.LatLng(35.194741,25.246333)
		],
		dimos: "minwa",
		oikismos: "Βόνη ", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"	
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.182227,25.246461),
			new google.maps.LatLng(35.182187,25.246335),
			new google.maps.LatLng(35.182098,25.246381),
			new google.maps.LatLng(35.182084,25.246491)
		],
		dimos: "minwa",
		oikismos: "Γαλατάς", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"	
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.186980,25.280418),
			new google.maps.LatLng(35.187034,25.280735),
			new google.maps.LatLng(35.186778,25.280815),
			new google.maps.LatLng(35.186736,25.280480)
		],
		dimos: "minwa",
		oikismos: "Θραψανό", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"	
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.218174,25.344389),
			new google.maps.LatLng(35.218194,25.344523),
			new google.maps.LatLng(35.218093,25.344577),
			new google.maps.LatLng(35.218027,25.344440)
		],
		dimos: "minwa",
		oikismos: "Τζίγκουνα", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.210905,25.343619),
			new google.maps.LatLng(35.210820,25.344029),
			new google.maps.LatLng(35.210572,25.343734),
			new google.maps.LatLng(35.210614,25.343595),
		],
		dimos: "minwa",
		oikismos: "Πολυθέα", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},

	{
		paths: [
			new google.maps.LatLng(35.173308,25.365243),
			new google.maps.LatLng(35.173280,25.365425),
			new google.maps.LatLng(35.173153,25.365401),
			new google.maps.LatLng(35.173126,25.365248)
		],
		dimos: "minwa",
		oikismos: "Μαθιά ", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.203734,25.358022),
			new google.maps.LatLng(35.203736,25.358489),
			new google.maps.LatLng(35.203495,25.358436),
			new google.maps.LatLng(35.203482,25.357904)
		],
		dimos: "minwa",
		oikismos: "Λύττος ", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 

	{
		paths: [
			new google.maps.LatLng(35.185342,25.330583),
			new google.maps.LatLng(35.185320,25.330739),
			new google.maps.LatLng(35.185079,25.330728),
			new google.maps.LatLng(35.185075,25.330495)
		],
		dimos: "minwa",
		oikismos: "Λιλιανό", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	}, 

	{
		paths: [
			new google.maps.LatLng(35.170820,25.333512),
			new google.maps.LatLng(35.170533,25.333700),
			new google.maps.LatLng(35.170509,25.333529),
			new google.maps.LatLng(35.170732,25.333303)
		],
		dimos: "minwa",
		oikismos: "Αγία Παρασκευή", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},

	{
		paths: [
			new google.maps.LatLng(35.252370,25.335312),
			new google.maps.LatLng(35.252188,25.335446),
			new google.maps.LatLng(35.252320,25.335607),
			new google.maps.LatLng(35.252475,25.335347)
		],
		dimos: "minwa",
		oikismos: "Λαγός", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.209419,25.336803),
			new google.maps.LatLng(35.209259,25.336785),
			new google.maps.LatLng(35.209275,25.336991),
			new google.maps.LatLng(35.209391,25.337021)
		],
		dimos: "minwa",
		oikismos: "Καστέλλι ", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	} ,
	
	{
		paths: [
			new google.maps.LatLng(35.248471,25.306926),
			new google.maps.LatLng(35.248164,25.306921),
			new google.maps.LatLng(35.248129,25.307291),
			new google.maps.LatLng(35.248419,25.307318)
		],
		dimos: "minwa",
		oikismos: "Σμάρι ", 
		onoma: "plateia",
		perigrafi: "Πλατεία οικισμού"
	} ,
	
	/************************ TELOS dimos MINWA *******************************/	
	
	
	/************************ dimos VIANNOY *******************************/	
	{
		paths: [
			new google.maps.LatLng(35.051742,25.412407),
			new google.maps.LatLng(35.051285,25.412402),
			new google.maps.LatLng(35.051320,25.412799),
			new google.maps.LatLng(35.051746,25.412825)
		],
		dimos: "viannou",
		oikismos: "Άνω Βιάννος", 
		onoma: "proaylio sxoleioy",
		perigrafi: "Προαύλιο Γυμνασίου και Λυκείου Άνω Βιάννου "
	} ,
	{
		paths: [
			new google.maps.LatLng(35.034301,25.405809),
			new google.maps.LatLng(35.033730,25.406077),
			new google.maps.LatLng(35.034099,25.407182),
			new google.maps.LatLng(35.034670,25.406860)
		],
		dimos: "viannou",
		oikismos: "Άνω Βιάννος", 
		onoma: "Δημοτικό γήπεδο Άνω Βιάννου  Αγία Μονή ",
		perigrafi: "Δημοτικό γήπεδο Άνω Βιάννου  Αγία Μονή"
	} ,
	{
		paths: [
			new google.maps.LatLng(34.999495,25.381712),
			new google.maps.LatLng(34.999038,25.381562),
			new google.maps.LatLng(34.998974,25.381768),
			new google.maps.LatLng(34.999442,25.381961)
		],
		dimos: "viannou",
		oikismos: "Κερατόκαμπος", 
		onoma: "agrotemaxio stamatoulaki",
		perigrafi: "Αγροτεμάχιο Σταματουλάκη "
	},
	{
		paths: [
			new google.maps.LatLng(35.034747,25.461065),
			new google.maps.LatLng(35.034661,25.461100),
			new google.maps.LatLng(35.034758,25.461376),
			new google.maps.LatLng(35.034868,25.461338)
		],
		dimos: "viannou",
		oikismos: "Άγιος Βασίλειος", 
		onoma: "dimotiko sxoleio",
		perigrafi: "Προαύλιο  Δημοτικού Σχολείου Αγίου Βασιλείου "
	},
	{
		paths: [
			new google.maps.LatLng(35.038871,25.444907),
			new google.maps.LatLng(35.038595,25.444937),
			new google.maps.LatLng(35.038590,25.445146),
			new google.maps.LatLng(35.038869,25.445125)
		],
		dimos: "viannou",
		oikismos: "Αμιρά", 
		onoma: "gipedo mpasket",
		perigrafi: "Γήπεδο Μπάσκετ θέση Μελιανά "
		
	},
	{
		paths: [
			new google.maps.LatLng(34.992376,25.455102),
			new google.maps.LatLng(34.992285,25.455014),
			new google.maps.LatLng(34.992195,25.455183),
			new google.maps.LatLng(34.992270,25.455295)
		],
		dimos: "viannou",
		oikismos: "Άρβη", 
		onoma: "ekklisia Agioy Paylou",
		perigrafi: "Προαύλιο εκκλησίας Αγίου "
	},
	{
		paths: [
			new google.maps.LatLng(34.992635,25.455371),
			new google.maps.LatLng(34.992501,25.455253),
			new google.maps.LatLng(34.992461,25.455287),
			new google.maps.LatLng(34.992571,25.455443)
		],
		dimos: "viannou",
		oikismos: "Άρβη", 
		onoma: "apothiki agrotikou synetairismoy",
		perigrafi: "Προαύλιο αποθήκης Αγροτικού Συνεταιρισμού Άρβης "
	},
	{
		paths: [
			new google.maps.LatLng(34.993534,25.458082),
			new google.maps.LatLng(34.993200,25.458098),
			new google.maps.LatLng(34.993213,25.458273),
			new google.maps.LatLng(34.993556,25.458249)
		],
		dimos: "viannou",
		oikismos: "Άρβη", 
		onoma: "apothiki Kentristaki",
		perigrafi: "Προαύλιο  αποθήκης  Κεντριστάκη  "
	},
	{
		paths: [
			new google.maps.LatLng(35.106031,25.353822),
			new google.maps.LatLng(35.105794,25.353881),
			new google.maps.LatLng(35.105864,25.354235),
			new google.maps.LatLng(35.106116,25.354160)
		],
		dimos: "viannou",
		oikismos: "Αφρατί", 
		onoma: "plateia",
		perigrafi: "Κεντρική πλατεία "
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.038531,25.435667),
			new google.maps.LatLng(35.038553,25.435847),
			new google.maps.LatLng(35.038483,25.435874),
			new google.maps.LatLng(35.038485,25.435659)
		],
		dimos: "viannou",
		oikismos: "Βαχός", 
		onoma: "sxoleio",
		perigrafi: "Προαύλιο  πρώην Δημοτικού Σχολείου "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.097345,25.384818),
			new google.maps.LatLng(35.097260,25.384737),
			new google.maps.LatLng(35.096911,25.384901),
			new google.maps.LatLng(35.096986,25.385048)
		],
		dimos: "viannou",
		oikismos: "Έμπαρος", 
		onoma: "plateia",
		perigrafi: "Κεντρική πλατεία  "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.099024,25.383385),
			new google.maps.LatLng(35.098805,25.383243),
			new google.maps.LatLng(35.098664,25.383351),
			new google.maps.LatLng(35.098989,25.383509)
		],
		dimos: "viannou",
		oikismos: "Έμπαρος", 
		onoma: "Προαύλιο Αγροτικού Συνεταιρισμού  Εμπάρου ",
		perigrafi: ""
	}, 
	{
		paths: [
			new google.maps.LatLng(34.986689,25.499793),
			new google.maps.LatLng(34.986535,25.499710),
			new google.maps.LatLng(34.986508,25.499871),
			new google.maps.LatLng(34.986671,25.499903)
		],
		dimos: "viannou",
		oikismos: "Σιδωνία", 
		onoma: "sxoleio",
		perigrafi: "Προαύλιο Δημοτικού Σχολείου  "
	}, 
	{
		paths: [
			new google.maps.LatLng(34.991727,25.503353),
			new google.maps.LatLng(34.991422,25.503194),
			new google.maps.LatLng(34.991261,25.503637),
			new google.maps.LatLng(34.991543,25.503771)
		],
		dimos: "viannou",
		oikismos: "Σιδωνία", 
		onoma: "Προαύλιο αποθήκης Αγροτικού Συνεταιρισμού Ψαρής ",
		perigrafi: ""
	}, 
	
	{
		paths: [
			new google.maps.LatLng(34.984849,25.499147),
			new google.maps.LatLng(34.984682,25.499555),
			new google.maps.LatLng(34.984177,25.499163),
			new google.maps.LatLng(34.984397,25.498806)
		],
		dimos: "viannou",
		oikismos: "Σιδωνία", 
		onoma: "Αγροτεμάχιο Αλεξανδράκη ",
		perigrafi: ""
	}, 
	{
		paths: [
			new google.maps.LatLng(34.995935,25.506569),
			new google.maps.LatLng(34.995830,25.506593),
			new google.maps.LatLng(34.995887,25.506915),
			new google.maps.LatLng(34.996036,25.506872)
		],
		dimos: "viannou",
		oikismos: "Ψαρή Φοράδα", 
		onoma: "Προαύλιο Αγροτικού Συνεταιρισμού Συκολόγου  ",
		perigrafi: ""
	}, 
	{
		paths: [
			new google.maps.LatLng(35.048861,25.390324),
			new google.maps.LatLng(35.048727,25.390410),
			new google.maps.LatLng(35.048641,25.390188),
			new google.maps.LatLng(35.048773,25.390088)
		],
		dimos: "viannou",
		oikismos: "Κάτω Βιάννος", 
		onoma: "proavlio politistikou sylogou",
		perigrafi: "Προαύλιο Πολιτιστικού Συλόγου Κάτω Βιάννου "
	},
	{
		paths: [
			new google.maps.LatLng(35.047539,25.488997),
			new google.maps.LatLng(35.047418,25.489276),
			new google.maps.LatLng(35.047174,25.489019),
			new google.maps.LatLng(35.047214,25.488839)
		],
		dimos: "viannou",
		oikismos: "Κάτω Σύμη", 
		onoma: "plateia",
		perigrafi: "Κεντρική πλατεία Κάτω Σύμης "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.074412,25.359353),
			new google.maps.LatLng(35.074530,25.359702),
			new google.maps.LatLng(35.074489,25.359736),
			new google.maps.LatLng(35.074295,25.359471)
		],
		dimos: "viannou",
		oikismos: "Μάρθα", 
		onoma: "sxoleio",
		perigrafi: "Προαύλιο πρώην Δημοτικού σχολείου "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.089903,25.394382),
			new google.maps.LatLng(35.089897,25.394656),
			new google.maps.LatLng(35.089796,25.394742),
			new google.maps.LatLng(35.089805,25.394353)
		],
		dimos: "viannou",
		oikismos: "Μιλλιαράδες", 
		onoma: "plateia",
		perigrafi: "Κεντρική πλατεία Μιλλιαράδων  "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.039805,25.478896),
			new google.maps.LatLng(35.039108,25.478502),
			new google.maps.LatLng(35.039181,25.479151),
			new google.maps.LatLng(35.039807,25.479395)
		],
		dimos: "viannou",
		oikismos: "Πεύκος", 
		onoma: "proavlio elaiourgiou stefanaki",
		perigrafi: "Προαύλιο ελαιουργείου  Στεφανάκη "
	},
	
	{
		paths: [
			new google.maps.LatLng(35.023781,25.509953),
			new google.maps.LatLng(35.023530,25.509894),
			new google.maps.LatLng(35.023486,25.510608),
			new google.maps.LatLng(35.023857,25.510734)
		],
		dimos: "viannou",
		oikismos: "Συκολόγος", 
		onoma: "proavlio agrotikou syneterismou",
		perigrafi: "Προαύλιο Αγροτικού Συνεταιρισμού Συκολόγου "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.023438,25.511858),
			new google.maps.LatLng(35.023286,25.511716),
			new google.maps.LatLng(35.022944,25.512094),
			new google.maps.LatLng(35.023082,25.512402)
		],
		dimos: "viannou",
		oikismos: "Συκολόγος", 
		onoma: "proavlio politistikou sylogou",
		perigrafi: "Προαύλιο Πολιτιστικού Συλλόγου "
	}, 
	{
		paths: [
			new google.maps.LatLng(34.995665,25.533450),
			new google.maps.LatLng(34.995513,25.533232),
			new google.maps.LatLng(34.995012,25.533573),
			new google.maps.LatLng(34.995230,25.533906)
		],
		dimos: "viannou",
		oikismos: "Τέρτσα", 
		onoma: "plateia agiou gewrgiou",
		perigrafi: "Πλατεία Αγίου Γεωργίου "
	},
	{
		paths: [
			new google.maps.LatLng(35.033809,25.377273),
			new google.maps.LatLng(35.033796,25.377654),
			new google.maps.LatLng(35.033658,25.377721),
			new google.maps.LatLng(35.033662,25.377294)
		],
		dimos: "viannou",
		oikismos: "Χόνδρος ", 
		onoma: "sxoleio",
		perigrafi: "Προαύλιο πρώην   Δημοτικού Σχολείου Χόνδρου "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.037659,25.380470),
			new google.maps.LatLng(35.037659,25.380770),
			new google.maps.LatLng(35.037543,25.380802),
			new google.maps.LatLng(35.037523,25.380521)
		],
		dimos: "viannou",
		oikismos: "Χόνδρος ", 
		onoma: "aithousa ekdilwsewn pervolas",
		perigrafi: "Αίθουσα εκδηλώσεων Ιερού Ναού Μιχαήλ Αρχαγγέλου Περβόλας "
	}, 
	{
		paths: [
			new google.maps.LatLng(34.996946,25.369218),
			new google.maps.LatLng(34.996843,25.369628),
			new google.maps.LatLng(34.996643,25.369572),
			new google.maps.LatLng(34.996638,25.369296)
		],
		dimos: "viannou",
		oikismos: "Καστρί", 
		onoma: "proavlio agiou mirwna",
		perigrafi: "Προαύλιο Ιερού Ναού Αγίου Μύρωνα "
	}, 
	{
		paths: [
			new google.maps.LatLng(34.997957,25.371385),
			new google.maps.LatLng(34.998060,25.371624),
			new google.maps.LatLng(34.997871,25.371758),
			new google.maps.LatLng(34.997770,25.371522)
		],
		dimos: "viannou",
		oikismos: "Καστρί", 
		onoma: "Πλατεία αλιευτικού καταφυγίου  Καστρίου ",
		perigrafi: "Πλατεία αλιευτικού καταφυγίου  Καστρίου "
		
	}, 
	{
		paths: [
			new google.maps.LatLng(34.990875,25.333561),
			new google.maps.LatLng(34.991516,25.335331),
			new google.maps.LatLng(34.990514,25.335739),
			new google.maps.LatLng(34.989319,25.333400)
		],
		dimos: "viannou",
		oikismos: "Άγιος Ιωάννης  ", 
		onoma: "oikopedo klironomwn vasilaki",
		perigrafi: "Οικόπεδο  κληρονόμων Αικατερίνης Βασιλάκη "
	}, 
	{
		paths: [
			new google.maps.LatLng(34.985656,25.328757),
			new google.maps.LatLng(34.984608,25.330160),
			new google.maps.LatLng(34.985139,25.330594),
			new google.maps.LatLng(34.985856,25.329435)
		],
		dimos: "viannou",
		oikismos: "Δέρματος", 
		onoma: "oikopedo vlaxaki",
		perigrafi: "Οικόπεδο οικογένειας Βλαχάκη "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.096558,25.397118),
			new google.maps.LatLng(35.096062,25.397100),
			new google.maps.LatLng(35.096086,25.397328),
			new google.maps.LatLng(35.096492,25.397421)
		],
		dimos: "viannou",
		oikismos: "Ξενιάκος  ", 
		onoma: "elaiourgeio",
		perigrafi: "Προαύλιο ελαιουργείου  Εμμ Μελισουργάκη "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.094593,25.411811),
			new google.maps.LatLng(35.094519,25.411744),
			new google.maps.LatLng(35.094464,25.411895),
			new google.maps.LatLng(35.094541,25.411951)
		],
		dimos: "viannou",
		oikismos: "Κατωφύγι ", 
		onoma: "plateia katofygiou",
		perigrafi: "Πλατεία Καταφυγίου "
	}, 
	
	
		/************************ telos dimos VIANNOY *******************************/	
		
		
		
		/************************ dimos HRAKLEIOY *******************************/	
	{
		paths: [
			new google.maps.LatLng(35.210129,25.101228),
			new google.maps.LatLng(35.209744,25.101249),
			new google.maps.LatLng(35.209761,25.101515),
			new google.maps.LatLng(35.210147,25.101493)
		],
		dimos: "irakleiou",
		oikismos: "Προφήτης Ηλίας", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Προφήτη Ηλία "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.202139,25.035846),
			new google.maps.LatLng(35.200819,25.035363),
			new google.maps.LatLng(35.200653,25.036227),
			new google.maps.LatLng(35.202091,25.036629)
		],
		dimos: "irakleiou",
		oikismos: "Βενεράτο", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Βενεράτου "
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.238110,25.029929),
			new google.maps.LatLng(35.237514,25.029151),
			new google.maps.LatLng(35.237159,25.029607),
			new google.maps.LatLng(35.237658,25.030391)
		],
		dimos: "irakleiou",
		oikismos: "Αγιος Μύρωνας", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Αγίου Μύρωνα"
	},
	{
		paths: [
			new google.maps.LatLng(35.207819,25.044917),
			new google.maps.LatLng(35.207403,25.044510),
			new google.maps.LatLng(35.206820,25.045373),
			new google.maps.LatLng(35.207241,25.045776)
		],
		dimos: "irakleiou",
		oikismos: "Δαφνές", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Δαφνών"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.259703,25.051695),
			new google.maps.LatLng(35.259313,25.051717),
			new google.maps.LatLng(35.259344,25.052503),
			new google.maps.LatLng(35.259771,25.052543)
		],
		dimos: "irakleiou",
		oikismos: "Βούτες", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Βουτών "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.250199,25.058562),
			new google.maps.LatLng(35.249890,25.058272),
			new google.maps.LatLng(35.249733,25.058503),
			new google.maps.LatLng(35.249943,25.058817)
		],
		dimos: "irakleiou",
		oikismos: "Σταυράκια", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Σταυρακίων"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.205194,24.992885),
			new google.maps.LatLng(35.204324,24.993167),
			new google.maps.LatLng(35.204436,24.993770),
			new google.maps.LatLng(35.205268,24.993481)
		],
		dimos: "irakleiou",
		oikismos: "Άνω - Κάτω Ασίτες", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Ασιτών "
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.190623,25.027191),
			new google.maps.LatLng(35.190371,25.026713),
			new google.maps.LatLng(35.189643,25.027169),
			new google.maps.LatLng(35.189862,25.027665)
		],
		dimos: "irakleiou",
		oikismos: "Αυγενική", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Αυγενικής"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.251231,25.131620),
			new google.maps.LatLng(35.250795,25.131604),
			new google.maps.LatLng(35.250773,25.131893),
			new google.maps.LatLng(35.251205,25.131915)
		],
		dimos: "irakleiou",
		oikismos: "Άγιος Βλάσσης", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Αγίου Βλάσση"
	},
	{
		paths: [
			new google.maps.LatLng(35.296605,25.145728),
			new google.maps.LatLng(35.296598,25.146128),
			new google.maps.LatLng(35.296375,25.146125),
			new google.maps.LatLng(35.296377,25.145723)
		],
		dimos: "irakleiou",
		oikismos: "Μαραθίτης", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Μαραθίτη"
	}, 

	{
		paths: [
			new google.maps.LatLng(35.327853,25.052444),
			new google.maps.LatLng(35.326181,25.053012),
			new google.maps.LatLng(35.326479,25.054461),
			new google.maps.LatLng(35.328107,25.053248)
		],
		dimos: "irakleiou",
		oikismos: "Λινοπεράματα", 
		onoma: "vardinogianeio",
		perigrafi: "Βαρδινογιάννειο Αθλητικό Κέντρο"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.337201,25.164936),
			new google.maps.LatLng(35.332878,25.165880),
			new google.maps.LatLng(35.331600,25.172360),
			new google.maps.LatLng(35.337674,25.171115)
		],
		dimos: "irakleiou",
		oikismos: "Αλικαρνασσός", 
		onoma: "xwros s",
		perigrafi: "Χώρος ΣΕΑΠ  "
	},
	{
		paths: [
			new google.maps.LatLng(35.327713,25.169731),
			new google.maps.LatLng(35.325577,25.170654),
			new google.maps.LatLng(35.326295,25.171620),
			new google.maps.LatLng(35.328063,25.170622)
		],
		dimos: "irakleiou",
		oikismos: "Αλικαρνασσός", 
		onoma: "kleisto gipedo 2 aorakia",
		perigrafi: "Κλειστό γήπεδο «Δυο Αοράκια» "
	},
	{
		paths: [
			new google.maps.LatLng(35.335810,25.104232),
			new google.maps.LatLng(35.335420,25.104082),
			new google.maps.LatLng(35.335341,25.104484),
			new google.maps.LatLng(35.335718,25.104623)
		],
		dimos: "irakleiou",
		oikismos: "Ηράκλειο", 
		onoma: "kleisto gipedo linto",
		perigrafi: "Κλειστό γήπεδο  «Λίντο» "
	},
	{
		paths: [
			new google.maps.LatLng(35.337534,25.105788),
			new google.maps.LatLng(35.337486,25.106657),
			new google.maps.LatLng(35.336103,25.106463),
			new google.maps.LatLng(35.336203,25.105578)
		],
		dimos: "irakleiou",
		oikismos: "Ηράκλειο", 
		onoma: "Παγκρήτιο Στάδιο",
		perigrafi: "Παγκρήτιο Στάδιο "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.344903,25.160596),
			new google.maps.LatLng(35.344181,25.160698),
			new google.maps.LatLng(35.344303,25.161518),
			new google.maps.LatLng(35.344973,25.161406)
		],
		dimos: "irakleiou",
		oikismos: "Ηράκλειο", 
		onoma: "kleisto gipedo melina merkouri",
		perigrafi: "Κλειστό γήπεδο «Μελίνα Μερκούρη» "
	},
		{
		paths: [
			new google.maps.LatLng(35.320185,25.136102),
			new google.maps.LatLng(35.319599,25.136150),
			new google.maps.LatLng(35.319638,25.137228),
			new google.maps.LatLng(35.320242,25.137196)
		],
		dimos: "irakleiou",
		oikismos: "Ηράκλειο", 
		onoma: "gipedo poa",
		perigrafi: "Γήπεδο ΠΟΑ "
	}, 
	{
		paths: [
			new google.maps.LatLng(35.336449,25.125105),
			new google.maps.LatLng(35.336042,25.124579),
			new google.maps.LatLng(35.335079,25.125679),
			new google.maps.LatLng(35.335591,25.126162)
		],
		dimos: "irakleiou",
		oikismos: "Ηράκλειο", 
		onoma: "stadio",
		perigrafi: "Νέο Στάδιο Χανιώπορτα "
	}, 
	
		/************************ TELOS dimos HRAKLEIOY *******************************/

		/************************ dimos FAISTOY *******************************/	

	
	{
		paths: [
			new google.maps.LatLng(35.075755,24.875080),
			new google.maps.LatLng(35.075290,24.874737),
			new google.maps.LatLng(35.074829,24.875686),
			new google.maps.LatLng(35.075294,24.875981)
		],
		dimos: "faistoy",
		oikismos: "Γαλιάς", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο ποδοσφαίρου Γαλιάς "
	},
	

	{
		paths: [
			new google.maps.LatLng(35.010605,24.870708),
			new google.maps.LatLng(35.010025,24.870847),
			new google.maps.LatLng(35.010271,24.871845),
			new google.maps.LatLng(35.010772,24.871781)
		],
		dimos: "faistoy",
		oikismos: "Πόμπιας", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο ποδοσφαίρου Πόμπιας "
	},
	{
		paths: [
			new google.maps.LatLng(35.011387,24.865081),
			new google.maps.LatLng(35.010904,24.865059),
			new google.maps.LatLng(35.010838,24.865601),
			new google.maps.LatLng(35.011387,24.865703)
		],
		dimos: "faistoy",
		oikismos: "Πόμπιας", 
		onoma: "ayleios xwros gymnasioy-lykeioy",
		perigrafi: "Αύλειος χώρος Γυμνασίου – Λυκείου Πόμπιας"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.014346,24.882840),
			new google.maps.LatLng(35.014249,24.882904),
			new google.maps.LatLng(35.014357,24.883298),
			new google.maps.LatLng(35.014533,24.883188)
		],
		dimos: "faistoy",
		oikismos: "Αληθινή", 
		onoma: "Αύλειος χώρος παλαιού Δημοτικού Σχολείου Αληθινής",
		perigrafi: "Αύλειος χώρος παλαιού Δημοτικού Σχολείου Αληθινής"
	},
	
	{
		paths: [
			new google.maps.LatLng(34.959022,24.878524),
			new google.maps.LatLng(34.959290,24.878950),
			new google.maps.LatLng(34.959141,24.879106),
			new google.maps.LatLng(34.958930,24.878602)
		],
		dimos: "faistoy",
		oikismos: "Αντισκάρι", 
		onoma: "sxoleio",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.062744,24.919216),
			new google.maps.LatLng(35.061670,24.919288),
			new google.maps.LatLng(35.061666,24.919953),
			new google.maps.LatLng(35.062834,24.919809)
		],
		dimos: "faistoy",
		oikismos: "Καστέλι", 
		onoma: "sxoleio",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(34.984441,24.851616),
			new google.maps.LatLng(34.984098,24.852016),
			new google.maps.LatLng(34.984100,24.852142),
			new google.maps.LatLng(34.984326,24.852265)
		],
		dimos: "faistoy",
		oikismos: "Πηγαϊδάκια", 
		onoma: "sxoleio",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	}, 
	
	{
		paths: [
			new google.maps.LatLng(35.022684,24.892375),
			new google.maps.LatLng(35.022318,24.891846),
			new google.maps.LatLng(35.022318,24.892386),
			new google.maps.LatLng(35.022610,24.892616)
		],
		dimos: "faistoy",
		oikismos: "Περί", 
		onoma: "sxoleio",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	},

	{
		paths: [
			new google.maps.LatLng(35.030060,24.834037),
			new google.maps.LatLng(35.029619,24.834192),
			new google.maps.LatLng(35.029704,24.834667),
			new google.maps.LatLng(35.030212,24.834504)
		],
		dimos: "faistoy",
		oikismos: "Πετροκεφάλι", 
		onoma: "sxoleio",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.032884,24.834182),
			new google.maps.LatLng(35.032410,24.834101),
			new google.maps.LatLng(35.032364,24.834463),
			new google.maps.LatLng(35.032874,24.834546)
		],
		dimos: "faistoy",
		oikismos: "Πετροκεφάλι", 
		onoma: "ghpedo",
		perigrafi: "Γήπεδο Ποδοσφαίρου"
	},
	{
		paths: [
			new google.maps.LatLng(35.031193,24.832521),
			new google.maps.LatLng(35.030923,24.832495),
			new google.maps.LatLng(35.030897,24.832908),
			new google.maps.LatLng(35.031211,24.832881)
		],
		dimos: "faistoy",
		oikismos: "Πετροκεφάλι", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Μπάσκετ"
	},

	{
		paths: [
			new google.maps.LatLng(35.078745,24.908962),
			new google.maps.LatLng(35.078620,24.909013),
			new google.maps.LatLng(35.078657,24.909168),
			new google.maps.LatLng(35.078773,24.909101)
		],
		dimos: "faistoy",
		oikismos: "Ρουφά ", 
		onoma: "sxoleio",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	},

	
	{
		paths: [
			new google.maps.LatLng(35.107920,24.843376),
			new google.maps.LatLng(35.107617,24.843186),
			new google.maps.LatLng(35.107448,24.843489),
			new google.maps.LatLng(35.107887,24.843765)
		],
		dimos: "faistoy",
		oikismos: "Σκούρβουλα", 
		onoma: "sxoleio",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.097067,24.913977),
			new google.maps.LatLng(35.096628,24.914358),
			new google.maps.LatLng(35.096779,24.914514),
			new google.maps.LatLng(35.097148,24.914173)
		],
		dimos: "faistoy",
		oikismos: "Μορόνι", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Μπάσκετ"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.016813,24.781125),
			new google.maps.LatLng(35.016756,24.781133),
			new google.maps.LatLng(35.016650,24.781530),
			new google.maps.LatLng(35.016806,24.781511)
		],
		dimos: "faistoy",
		oikismos: "Πιτσιδία", 
		onoma: "sxoleio",
		perigrafi: "Αύλειος χώρος παλαιού Δημοτικού Σχολείου"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.069617,24.810498),
			new google.maps.LatLng(35.069178,24.810712),
			new google.maps.LatLng(35.069503,24.811630),
			new google.maps.LatLng(35.069925,24.811479)
		],
		dimos: "faistoy",
		oikismos: "Βώροι", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο ποδοσφαίρου Βώρων"
	},

	{
		paths: [
			new google.maps.LatLng(35.107758,24.758946),
			new google.maps.LatLng(35.107556,24.758973),
			new google.maps.LatLng(35.107573,24.759294),
			new google.maps.LatLng(35.107749,24.759305)
		],
		dimos: "faistoy",
		oikismos: "Κλήμα", 
		onoma: "plateia",
		perigrafi: "Αύλειος χώρος παλαιού Δημοτικού Σχολείου"
	},

	{
		paths: [
			new google.maps.LatLng(35.073176,24.826779),
			new google.maps.LatLng(35.072976,24.826486),
			new google.maps.LatLng(35.072530,24.826795),
			new google.maps.LatLng(35.072875,24.827259)
		],
		dimos: "faistoy",
		oikismos: "Φανερωμένη", 
		onoma: "plateia",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.071003,24.827291),
			new google.maps.LatLng(35.070818,24.827422),
			new google.maps.LatLng(35.070919,24.827621),
			new google.maps.LatLng(35.071049,24.827428)
		],
		dimos: "faistoy",
		oikismos: "Φανερωμένη", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Μπάσκετ"
	},

	{
		paths: [
			new google.maps.LatLng(35.018138,24.808789),
			new google.maps.LatLng(35.017990,24.808795),
			new google.maps.LatLng(35.018010,24.809143),
			new google.maps.LatLng(35.018159,24.809116)
		],
		dimos: "faistoy",
		oikismos: "Σίβα", 
		onoma: "plateia",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	},

	{
		paths: [
			new google.maps.LatLng(35.132687,24.808577),
			new google.maps.LatLng(35.132621,24.808465),
			new google.maps.LatLng(35.132472,24.808658),
			new google.maps.LatLng(35.132558,24.808776)
		],
		dimos: "faistoy",
		oikismos: "Γρηγοριά", 
		onoma: "plateia",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	},

	{
		paths: [
			new google.maps.LatLng(35.153572,24.820073),
			new google.maps.LatLng(35.153418,24.820060),
			new google.maps.LatLng(35.153372,24.820411),
			new google.maps.LatLng(35.153495,24.820446)
		],
		dimos: "faistoy",
		oikismos: "Καμάρες", 
		onoma: "plateia",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείο Καμαρών"
	},

	{
		paths: [
			new google.maps.LatLng(35.024971,24.801378),
			new google.maps.LatLng(35.024163,24.801861),
			new google.maps.LatLng(35.024286,24.802419),
			new google.maps.LatLng(35.025138,24.802001)
		],
		dimos: "faistoy",
		oikismos: "Καμηλάρι", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο ποδοσφαίρου Καμηλαρίου"
	},

	{
		paths: [
			new google.maps.LatLng(35.107527,24.791824),
			new google.maps.LatLng(35.107332,24.791851),
			new google.maps.LatLng(35.107304,24.792028),
			new google.maps.LatLng(35.107527,24.792092)
		],
		dimos: "faistoy",
		oikismos: "Λαγολιό", 
		onoma: "gipedo",
		perigrafi: "Αύλειος χώρος Δημοτικού Σχολείου"
	},

	{
		paths: [
			new google.maps.LatLng(35.128675,24.826492),
			new google.maps.LatLng(35.128416,24.826417),
			new google.maps.LatLng(35.128407,24.826744),
			new google.maps.LatLng(35.128761,24.826741),
			new google.maps.LatLng(35.128782,24.826503)
		],
		dimos: "faistoy",
		oikismos: "Μαγαρικάρι", 
		onoma: "gipedo",
		perigrafi: "Αύλειος χώρος κοινοτικού καταστήματος"
	}, 
	
	
/////////////// Τυμπακι /////////////////// 
{
		paths: [
			new google.maps.LatLng(35.068063,24.766778),
			new google.maps.LatLng(35.067387,24.766638),
			new google.maps.LatLng(35.067405,24.768269),
			new google.maps.LatLng(35.067852,24.768344)
		],
		dimos: "faistoy",
		oikismos: "Τυμπάκι", 
		onoma: "platia",
		perigrafi: "Πολυδύναμο Ιατρείο"
	
	},
	{
		paths: [
			new google.maps.LatLng(35.069143,24.772689),
			new google.maps.LatLng(35.068397,24.772421),
			new google.maps.LatLng(35.068915,24.773773)
		],
		dimos: "faistoy",
		oikismos: "Τυμπάκι", 
		onoma: "platia",
		perigrafi: "Παιδική χαρά"
	
	},
	{
		paths: [
			new google.maps.LatLng(35.067282,24.766595),
			new google.maps.LatLng(35.066807,24.766542),
			new google.maps.LatLng(35.066834,24.766971),
			new google.maps.LatLng(35.067282,24.767014)
		],
		dimos: "faistoy",
		oikismos: "Τυμπάκι", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Γυμνασίου"
	
	},
	{
		paths: [
			new google.maps.LatLng(35.069556,24.776820),
			new google.maps.LatLng(35.068555,24.776573),
			new google.maps.LatLng(35.068432,24.777335),
			new google.maps.LatLng(35.069459,24.777485)
		],
		dimos: "faistoy",
		oikismos: "Τυμπάκι", 
		onoma: "gipedo",
		perigrafi: "Γήπεδο Α.Ο.Τ"
	
	},
	{
		paths: [
			new google.maps.LatLng(35.068283,24.776155),
			new google.maps.LatLng(35.067475,24.776058),
			new google.maps.LatLng(35.067431,24.776530),
			new google.maps.LatLng(35.068274,24.776659)
		],
		dimos: "faistoy",
		oikismos: "Τυμπάκι", 
		onoma: "gipedo",
		perigrafi: "Βοηθητικό Γήπεδο Α.Ο.Τ"
	
	},
	{
		paths: [
			new google.maps.LatLng(35.124652,24.903495),
			new google.maps.LatLng(35.124094,24.903731),
			new google.maps.LatLng(35.124415,24.904858),
			new google.maps.LatLng(35.124998,24.904600)
		],
		dimos: "faistoy",
		oikismos: "Ζαρός", 
		onoma: "gipedo",
		perigrafi: " Γήπεδο Ζαρού"
	
	},
	
	/////////////////////Moires///////////////////////////
	
	{
		paths: [
			new google.maps.LatLng(35.056629,24.856396),
			new google.maps.LatLng(35.055909,24.855409),
			new google.maps.LatLng(35.055400,24.855924),
			new google.maps.LatLng(35.056102,24.856954)
		],
		dimos: "faistoy",
		oikismos: "Μοίρες", 
		onoma: "gipedo",
		perigrafi:"Γήπεδο Μοιρών"
	},
	{
		paths: [
			new google.maps.LatLng(35.056190,24.879323),
			new google.maps.LatLng(35.055039,24.877714),
			new google.maps.LatLng(35.054486,24.878519),
			new google.maps.LatLng(35.055356,24.880536)
		],
		dimos: "faistoy",
		oikismos: "Μοίρες", 
		onoma: "alsos",
		perigrafi:"Άλσος Κουλέ"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.050705,24.879473),
			new google.maps.LatLng(35.050262,24.879425),
			new google.maps.LatLng(35.050222,24.879774),
			new google.maps.LatLng(35.050622,24.879822)
		],
		dimos: "faistoy",
		oikismos: "Μοίρες", 
		onoma: "paidiki xara",
		perigrafi:"Παιδική Χαρά"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.044829,24.871612),
			new google.maps.LatLng(35.044344,24.871368),
			new google.maps.LatLng(35.044067,24.872181),
			new google.maps.LatLng(35.044594,24.872400)
		],
		dimos: "faistoy",
		oikismos: "Μοίρες", 
		onoma: "gymnastirio",
		perigrafi:"Κλειστό Γυμναστήριο"
	},
	
	/************************ ΤΕΛΟΣ dimos FAISTOY *******************************/	
	
	/************************  dimos Xersonisou *******************************/	
	
	{
		paths: [
			new google.maps.LatLng(35.314066,25.387610),
			new google.maps.LatLng(35.314449,25.387723),
			new google.maps.LatLng(35.314300,25.388069),
			new google.maps.LatLng(35.314057,25.387782)
		],
		dimos: "xersonisou",
		oikismos: "Λιμένας Χερσονήσου, Πισκοπιανό , Κουτουλουφάρι", 
		onoma: "",
		perigrafi:"Δημαρχείο Λ.Χερσονήσου"
	},
	{
		paths: [
			new google.maps.LatLng(35.314580,25.388559),
			new google.maps.LatLng(35.314261,25.388213),
			new google.maps.LatLng(35.314107,25.388525),
			new google.maps.LatLng(35.314585,25.388707)
		],
		dimos: "xersonisou",
		oikismos: "Λιμένας Χερσονήσου, Πισκοπιανό , Κουτουλουφάρι", 
		onoma: "",
		perigrafi:"Πάρκινγκ Δημαρχείου Λ.Χερσονήσου"
	},
	{
		paths: [
			new google.maps.LatLng(35.314784,25.389764),
			new google.maps.LatLng(35.313873,25.389656),
			new google.maps.LatLng(35.313838,25.390365),
			new google.maps.LatLng(35.314753,25.390515)
		],
		dimos: "xersonisou",
		oikismos: "Λιμένας Χερσονήσου, Πισκοπιανό , Κουτουλουφάρι", 
		onoma: "",
		perigrafi:"Γήπεδο Ποδοσφαίρου Λ.Χερσονήσου"
	},
	{
		paths: [
			new google.maps.LatLng(35.316149,25.390534),
			new google.maps.LatLng(35.315801,25.390389),
			new google.maps.LatLng(35.315613,25.391067),
			new google.maps.LatLng(35.315850,25.391250)
		],
		dimos: "xersonisou",
		oikismos: "Λιμένας Χερσονήσου, Πισκοπιανό , Κουτουλουφάρι", 
		onoma: "",
		perigrafi:"Πλατεία Πετράκη"
	},
	{
		paths: [
			new google.maps.LatLng(35.318515,25.388967),
			new google.maps.LatLng(35.318362,25.388441),
			new google.maps.LatLng(35.318119,25.389077)
		],
		dimos: "xersonisou",
		oikismos: "Λιμένας Χερσονήσου, Πισκοπιανό , Κουτουλουφάρι", 
		onoma: "",
		perigrafi:"Παιδική χαρά"
	},
	{
		paths: [
			new google.maps.LatLng(35.310157,25.400375),
			new google.maps.LatLng(35.309864,25.400096),
			new google.maps.LatLng(35.309658,25.400530),
			new google.maps.LatLng(35.309885,25.400766)
		],
		dimos: "xersonisou",
		oikismos: "Λιμένας Χερσονήσου, Πισκοπιανό , Κουτουλουφάρι", 
		onoma: "",
		perigrafi:"Δημοτικό ακίνητο έναντι Silva Maris"
	},
	{
		paths: [
			new google.maps.LatLng(35.310205,25.365189),
			new google.maps.LatLng(35.309548,25.365082),
			new google.maps.LatLng(35.309540,25.365565),
			new google.maps.LatLng(35.310100,25.365672)
		],
		dimos: "xersonisou",
		oikismos: "Πάνω Χερσονήσος, Ανάληψη, Αγριανά, Χατζανά , Καλό Χωριό", 
		onoma: "",
		perigrafi:"Γήπεδο Ποδοσφαίρου"
	},
	{
		paths: [
			new google.maps.LatLng(35.331530,25.361853),
			new google.maps.LatLng(35.330322,25.362507),
			new google.maps.LatLng(35.330339,25.363076),
			new google.maps.LatLng(35.331565,25.363011)
		],
		dimos: "xersonisou",
		oikismos: "Πάνω Χερσονήσος, Ανάληψη, Αγριανά, Χατζανά , Καλό Χωριό", 
		onoma: "",
		perigrafi:"Δημοτικό Ακίνητο Ανισσαρά"
	},
	{
		paths: [
			new google.maps.LatLng(35.256177,25.387650),
			new google.maps.LatLng(35.255971,25.387554),
			new google.maps.LatLng(35.255936,25.387704),
			new google.maps.LatLng(35.256133,25.387972),
			new google.maps.LatLng(35.256260,25.387875)
		],
		dimos: "xersonisou",
		oikismos: "Πoταμιές", 
		onoma: "",
		perigrafi:"Παιδική Χαρά Οικισμού"
	},
	{
		paths: [
			new google.maps.LatLng(35.260546,25.384110),
			new google.maps.LatLng(35.260047,25.383933),
			new google.maps.LatLng(35.259924,25.384576),
			new google.maps.LatLng(35.260480,25.384646)
		],
		dimos: "xersonisou",
		oikismos: "Πoταμιές", 
		onoma: "",
		perigrafi:"Παναγία Γκουβερνιώτισσα"
	},
	{
		paths: [
			new google.maps.LatLng(35.232247,25.433967),
			new google.maps.LatLng(35.231910,25.433875),
			new google.maps.LatLng(35.231555,25.434986),
			new google.maps.LatLng(35.231686,25.435184)
		],
		dimos: "xersonisou",
		oikismos: "Aβδού", 
		onoma: "",
		perigrafi:"Παλαιό Δημοτικό Σχολείο"
	},
	{
		paths: [
			new google.maps.LatLng(35.230591,25.441109),
			new google.maps.LatLng(35.230282,25.441131),
			new google.maps.LatLng(35.230256,25.441386),
			new google.maps.LatLng(35.230580,25.441388)
		],
		dimos: "xersonisou",
		oikismos: "Γωνιές", 
		onoma: "",
		perigrafi:"Γήπεδο Μπάσκετ"
	},
	{
		paths: [
			new google.maps.LatLng(35.219267,25.460703),
			new google.maps.LatLng(35.218960,25.460730),
			new google.maps.LatLng(35.218934,25.460971)
		],
		dimos: "xersonisou",
		oikismos: "Άνω και Κάτω Κεράς", 
		onoma: "",
		perigrafi:"Χώρος στάθμευσης επί της Επαρχιακής οδού."
	},
	{
		paths: [
			new google.maps.LatLng(35.281676,25.456824),
			new google.maps.LatLng(35.280791,25.456170),
			new google.maps.LatLng(35.280415,25.456878),
			new google.maps.LatLng(35.281247,25.457500)
		],
		dimos: "xersonisou",
		oikismos: "Mάλια", 
		onoma: "",
		perigrafi:"Δημοτικό Γήπεδο Ποδοσφαίρου"
	},
	{
		paths: [
			new google.maps.LatLng(35.279583,25.462854),
			new google.maps.LatLng(35.279289,25.462666),
			new google.maps.LatLng(35.279171,25.462977),
			new google.maps.LatLng(35.279399,25.463138)
		],
		dimos: "xersonisou",
		oikismos: "Mάλια", 
		onoma: "",
		perigrafi:"Παιδική Χαρά"
	},
	{
		paths: [
			new google.maps.LatLng(35.291300,25.464935),
			new google.maps.LatLng(35.290539,25.464957),
			new google.maps.LatLng(35.290425,25.466212),
			new google.maps.LatLng(35.291292,25.466330)
		],
		dimos: "xersonisou",
		oikismos: "Mάλια", 
		onoma: "",
		perigrafi:"Χώρος Στάθμευσης"
	},
	{
		paths: [
			new google.maps.LatLng(35.282243,25.465721),
			new google.maps.LatLng(35.282120,25.465582),
			new google.maps.LatLng(35.282037,25.465689),
			new google.maps.LatLng(35.282116,25.465837)
		],
		dimos: "xersonisou",
		oikismos: "Mάλια", 
		onoma: "",
		perigrafi:"Δημοτικό ακίνητο στη θέση Μακρά Ελιά "
	},
	{
		paths: [
			new google.maps.LatLng(35.295810,25.423146),
			new google.maps.LatLng(35.295637,25.422945),
			new google.maps.LatLng(35.295204,25.423334),
			new google.maps.LatLng(35.295372,25.423576)
		],
		dimos: "xersonisou",
		oikismos: "Σταλίδα", 
		onoma: "",
		perigrafi:"Χώρος Στάθμευσης"
	},
	{
		paths: [
			new google.maps.LatLng(35.297400,25.422862),
			new google.maps.LatLng(35.297242,25.422567),
			new google.maps.LatLng(35.297115,25.422658),
			new google.maps.LatLng(35.297255,25.423012)
		],
		dimos: "xersonisou",
		oikismos: "Σταλίδα", 
		onoma: "",
		perigrafi:"Χώρος Στάθμευσης"
	},
	{
		paths: [
			new google.maps.LatLng(35.259072,25.428720),
			new google.maps.LatLng(35.258809,25.428302),
			new google.maps.LatLng(35.258656,25.428388),
			new google.maps.LatLng(35.258914,25.428870)
		],
		dimos: "xersonisou",
		oikismos: "Μοχός", 
		onoma: "",
		perigrafi:"Αύλειος Χώρος Γυμνασίου - Λυκείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.269028,25.427556),
			new google.maps.LatLng(35.268415,25.427341),
			new google.maps.LatLng(35.268012,25.428522),
			new google.maps.LatLng(35.268573,25.428715)
		],
		dimos: "xersonisou",
		oikismos: "Μοχός", 
		onoma: "",
		perigrafi:"Δημοτικό Γήπεδο Ποδοσφαίρου"
	},
	{
		paths: [
			new google.maps.LatLng(35.236099,25.466807),
			new google.maps.LatLng(35.235792,25.466743),
			new google.maps.LatLng(35.235779,25.467237),
			new google.maps.LatLng(35.235998,25.467322)
		],
		dimos: "xersonisou",
		oikismos: "Kράσι", 
		onoma: "",
		perigrafi:"Γήπεδο Μπάσκετ"
	},
	{
		paths: [
			new google.maps.LatLng(35.235770,25.467258),
			new google.maps.LatLng(35.235656,25.467263),
			new google.maps.LatLng(35.235603,25.467612),
			new google.maps.LatLng(35.235739,25.467601)
		],
		dimos: "xersonisou",
		oikismos: "Kράσι", 
		onoma: "",
		perigrafi:"Παιδική Χαρά"
	},
	{
		paths: [
			new google.maps.LatLng(35.252357,25.252043),
			new google.maps.LatLng(35.251700,25.252054),
			new google.maps.LatLng(35.251691,25.253052),
			new google.maps.LatLng(35.252252,25.253148)
		],
		dimos: "xersonisou",
		oikismos: "Επισκοπή", 
		onoma: "",
		perigrafi:"Δημοτικό Γήπεδο Ποδοσφαίρου"
	},
	{
		paths: [
			new google.maps.LatLng(35.257741,25.239410),
			new google.maps.LatLng(35.257530,25.239351),
			new google.maps.LatLng(35.257263,25.239651),
			new google.maps.LatLng(35.257675,25.239699)
		],
		dimos: "xersonisou",
		oikismos: "Επισκοπή", 
		onoma: "",
		perigrafi:"Δημοτικό Πάρκο"
	},
	{
		paths: [
			new google.maps.LatLng(35.258928,25.237516),
			new google.maps.LatLng(35.258709,25.237505),
			new google.maps.LatLng(35.258665,25.237918),
			new google.maps.LatLng(35.258893,25.237978)
		],
		dimos: "xersonisou",
		oikismos: "Επισκοπή", 
		onoma: "",
		perigrafi:"Αύλειος Χώρος Δημοτικού Σχολείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.260653,25.233772),
			new google.maps.LatLng(35.260250,25.233804),
			new google.maps.LatLng(35.260277,25.234201),
			new google.maps.LatLng(35.260636,25.234051)
		],
		dimos: "xersonisou",
		oikismos: "Επισκοπή", 
		onoma: "",
		perigrafi:"Αύλειος Χώρος Συγκροτήματος Γυμνασίου Λυκείου / Παιδικού Σταθμού"
	},
	{
		paths: [
			new google.maps.LatLng(35.240655,25.236422),
			new google.maps.LatLng(35.240353,25.236411),
			new google.maps.LatLng(35.240283,25.237457),
			new google.maps.LatLng(35.240616,25.237473)
		],
		dimos: "xersonisou",
		oikismos: "Σγουροκεφάλι", 
		onoma: "",
		perigrafi:"Αύλειος Χώρος Δημοτικού Σχολείου - Νηπιαγωγείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.283874,25.257601),
			new google.maps.LatLng(35.283664,25.257220),
			new google.maps.LatLng(35.283530,25.257362),
			new google.maps.LatLng(35.283747,25.257681)
		],
		dimos: "xersonisou",
		oikismos: "Καινούργιο Χωριό", 
		onoma: "",
		perigrafi:"Αύλειος Χώρος Παλαιού Δημοτικού Σχολείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.262265,25.279045),
			new google.maps.LatLng(35.261994,25.279123),
			new google.maps.LatLng(35.262016,25.279482),
			new google.maps.LatLng(35.262300,25.279458)
		],
		dimos: "xersonisou",
		oikismos: "Γαλύφα", 
		onoma: "",
		perigrafi:"Αύλειος Χώρος Αίθουσας Πολλαπλών Χρήσεων"
	},
	{
		paths: [
			new google.maps.LatLng(35.328287,25.287486),
			new google.maps.LatLng(35.326567,25.287464),
			new google.maps.LatLng(35.326593,25.288301),
			new google.maps.LatLng(35.328164,25.288323)
		],
		dimos: "xersonisou",
		oikismos: "Γούβες", 
		onoma: "",
		perigrafi:"Συνεδριακό Κέντρο"
	},
	{
		paths: [
			new google.maps.LatLng(35.326103,25.271682),
			new google.maps.LatLng(35.325459,25.271510),
			new google.maps.LatLng(35.325236,25.272841),
			new google.maps.LatLng(35.325862,25.273007)
		],
		dimos: "xersonisou",
		oikismos: "Κοκκίνη Χάνι, Βαθειανός Κάμπος , Γούρνες", 
		onoma: "",
		perigrafi:"Δημοτικό Γήπεδο Ποδοσφαίρου Γουρνών"
	},
	{
		paths: [
			new google.maps.LatLng(35.299050,25.308069),
			new google.maps.LatLng(35.298884,25.308117),
			new google.maps.LatLng(35.298998,25.308343),
			new google.maps.LatLng(35.299168,25.308246)
		],
		dimos: "xersonisou",
		oikismos: "Κόξαρη , Σκοτεινό", 
		onoma: "",
		perigrafi:"Πάρκο Έμπροσθεν Νηπιαγωγείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.283826,25.299459),
			new google.maps.LatLng(35.283662,25.299499),
			new google.maps.LatLng(35.283765,25.299719),
			new google.maps.LatLng(35.283920,25.299639)
		],
		dimos: "xersonisou",
		oikismos: "Βορίτσι , Χαρασό", 
		onoma: "",
		perigrafi:"Δημοτικό Ακίνητο στη θέση Θυμιάς"
	},
	{
		paths: [
			new google.maps.LatLng(35.331643,25.193914),
			new google.maps.LatLng(35.331022,25.193979),
			new google.maps.LatLng(35.331092,25.195223),
			new google.maps.LatLng(35.331722,25.195137)
		],
		dimos: "xersonisou",
		oikismos: "Ελιά, Κ.Βάθεια, Καρτερός , Εσταυρωμένος", 
		onoma: "",
		perigrafi:"Δημοτικό Γήπεδο Ποδοσφαίρου"
	},
	{
		paths: [
			new google.maps.LatLng(35.283412,25.240974),
			new google.maps.LatLng(35.283217,25.240965),
			new google.maps.LatLng(35.283217,25.241250),
			new google.maps.LatLng(35.283441,25.241252)
		],
		dimos: "xersonisou",
		oikismos: "Π. Βάθεια", 
		onoma: "",
		perigrafi:"Αύλειος Χώρος Παλαιού Δημοτικού"
	},
	{
		paths: [
			new google.maps.LatLng(35.305836,25.259583),
			new google.maps.LatLng(35.305462,25.259207),
			new google.maps.LatLng(35.305466,25.259650)
		],
		dimos: "xersonisou",
		oikismos: "Ανώπολη", 
		onoma: "",
		perigrafi:"Πάρκο στην Β.Α. Είσοδο του Οικισμού"
	},
	
	/************************ Telos dimos Xersonisou *******************************/	

	/************************ dimos Gortynas *******************************/	
	{
		paths: [
			new google.maps.LatLng(35.060423,24.972407),
			new google.maps.LatLng(35.058640,24.972149),
			new google.maps.LatLng(35.058552,24.973201),
			new google.maps.LatLng(35.060274,24.973372)
		],
		dimos: "gortinas",
		oikismos: "Αγ. Δέκα", 
		onoma: "",
		perigrafi:"Γήπεδο Αγ. Δέκα"
	},
	{
		paths: [
			new google.maps.LatLng(35.143981,24.996412),
			new google.maps.LatLng(35.143367,24.996268),
			new google.maps.LatLng(35.143099,24.997373),
			new google.maps.LatLng(35.143691,24.997566)
		],
		dimos: "gortinas",
		oikismos: "Αγ. Bαρβάρα", 
		onoma: "",
		perigrafi:"Γήπεδο Αγ. Βαρβάρας"
	},
	{
		paths: [
			new google.maps.LatLng(35.134317,24.941218),
			new google.maps.LatLng(35.133703,24.941132),
			new google.maps.LatLng(35.133615,24.942291),
			new google.maps.LatLng(35.134212,24.942355)
		],
		dimos: "gortinas",
		oikismos: "Γέργερη", 
		onoma: "",
		perigrafi:"Γήπεδο Γέργερης"
	},
	{
		paths: [
			new google.maps.LatLng(35.043441,25.083531),
			new google.maps.LatLng(35.042519,25.083536),
			new google.maps.LatLng(35.042514,25.084287),
			new google.maps.LatLng(35.043406,25.084249)
		],
		dimos: "gortinas",
		oikismos: "Ασήμι", 
		onoma: "",
		perigrafi:"Γήπεδο Ασημιού"
	},
	{
		paths: [
			new google.maps.LatLng(35.060116,25.109020),
			new google.maps.LatLng(35.059837,25.108936),
			new google.maps.LatLng(35.059804,25.109113),
			new google.maps.LatLng(35.060129,25.109146)
		],
		dimos: "gortinas",
		oikismos: "Σοκαράς", 
		onoma: "",
		perigrafi:"Πλατεία Σοκαρά"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.147319,25.034789),
			new google.maps.LatLng(35.147047,25.034730),
			new google.maps.LatLng(35.146990,25.035052),
			new google.maps.LatLng(35.147284,25.035009)
		],
		dimos: "gortinas",
		oikismos: "Αγ. Θωμάς", 
		onoma: "",
		perigrafi:"Αίθουσα πρώην Δημοτικού Σχολείου"
	},
	{
		paths: [
			new google.maps.LatLng(35.009436,25.084633),
			new google.maps.LatLng(35.009269,25.084692),
			new google.maps.LatLng(35.009309,25.084823),
			new google.maps.LatLng(35.009454,25.084791)
		],
		dimos: "gortinas",
		oikismos: "Στέρνες", 
		onoma: "",
		perigrafi:"Αίθουσα Πολιτιστικού Συλλόγου"
	},
	{
		paths: [
			new google.maps.LatLng(35.006661,25.070967),
			new google.maps.LatLng(35.006525,25.071104),
			new google.maps.LatLng(35.006565,25.071284),
			new google.maps.LatLng(35.006679,25.071276)
		],
		dimos: "gortinas",
		oikismos: "Παναγιάς", 
		onoma: "",
		perigrafi:"Προαύλιο Εκκλησίας"
	},
	{
		paths: [
			new google.maps.LatLng(35.053797,25.047517),
			new google.maps.LatLng(35.053524,25.047538),
			new google.maps.LatLng(35.053542,25.047806),
			new google.maps.LatLng(35.053814,25.047795)
		],
		dimos: "gortinas",
		oikismos: "Στόλοι", 
		onoma: "",
		perigrafi:"Δημοτικό Σχολείο"
	},
	{
		paths: [
			new google.maps.LatLng(35.059174,25.008909),
			new google.maps.LatLng(35.058941,25.008930),
			new google.maps.LatLng(35.058978,25.009228),
			new google.maps.LatLng(35.059176,25.009241)
		],
		dimos: "gortinas",
		oikismos: "Γκαγκάλες", 
		onoma: "",
		perigrafi:"Δημοτικό Σχολείο"
	},
	{
		paths: [
			new google.maps.LatLng(35.014326,25.000999),
			new google.maps.LatLng(35.014124,25.000983),
			new google.maps.LatLng(35.014282,25.001535),
			new google.maps.LatLng(35.014511,25.001407)
		],
		dimos: "gortinas",
		oikismos: "Βαγιωνιά", 
		onoma: "",
		perigrafi:"Δημοτικό Σχολείο Βαγιωνιάς"
	},
	
	{
		paths: [
			new google.maps.LatLng(35.004346,25.032826),
			new google.maps.LatLng(35.004234,25.032810),
			new google.maps.LatLng(35.004229,25.033086),
			new google.maps.LatLng(35.004328,25.033081)
		],
		dimos: "gortinas",
		oikismos: "Στάβιες", 
		onoma: "",
		perigrafi:"Προαύλιο Εκκλησίας"
	},
	{
		paths: [
			new google.maps.LatLng(35.045707,25.063840),
			new google.maps.LatLng(35.045558,25.063763),
			new google.maps.LatLng(35.045492,25.063932),
			new google.maps.LatLng(35.045628,25.064009)
		],
		dimos: "gortinas",
		oikismos: "Λούρες", 
		onoma: "",
		perigrafi:"Αίθουσα πρώην Δημοτικού Σχολείου"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.062965,24.935411),
			new google.maps.LatLng(35.062417,24.935800),
			new google.maps.LatLng(35.062502,24.935993),
			new google.maps.LatLng(35.062952,24.935950)
		],
		dimos: "gortinas",
		oikismos: "Αμπελούζος", 
		onoma: "",
		perigrafi:"Πρώην Δημοτικό Σχολείο"
	},
	{
		paths: [
			new google.maps.LatLng(35.006099,24.933072),
			new google.maps.LatLng(35.005816,24.932898),
			new google.maps.LatLng(35.005827,24.933348),
			new google.maps.LatLng(35.006097,24.933300)
		],
		dimos: "gortinas",
		oikismos: "Πλώρα", 
		onoma: "",
		perigrafi:"Πρώην Δημοτικό Σχολείο"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.009827,24.952038),
			new google.maps.LatLng(35.009711,24.951759),
			new google.maps.LatLng(35.009590,24.951904),
			new google.maps.LatLng(35.009748,24.952290)
		],
		dimos: "gortinas",
		oikismos: "Απεσωκάρι", 
		onoma: "",
		perigrafi:"Πρώην Δημοτικό Σχολείο"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.023886,24.923730),
			new google.maps.LatLng(35.023596,24.923767),
			new google.maps.LatLng(35.023723,24.924411),
			new google.maps.LatLng(35.024068,24.924427)
		],
		dimos: "gortinas",
		oikismos: "Πλάτανος", 
		onoma: "",
		perigrafi:"Προαύλιος Χώρος Εκκλησίας"
	}, 
	{
		paths: [
			new google.maps.LatLng(34.979940,24.913001),
			new google.maps.LatLng(34.979582,24.913173),
			new google.maps.LatLng(34.979808,24.913637),
			new google.maps.LatLng(34.979999,24.913487)
		],
		dimos: "gortinas",
		oikismos: "Άγιος Κύριλλος", 
		onoma: "",
		perigrafi:"Προαύλιος Χώρος Εκκλησίας"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.054741,24.944026),
			new google.maps.LatLng(35.054207,24.944514),
			new google.maps.LatLng(35.054227,24.944734),
			new google.maps.LatLng(35.054952,24.944775)
		],
		dimos: "gortinas",
		oikismos: "Μητρόπολη", 
		onoma: "",
		perigrafi:"Πρώην Δημοτικό Σχολείο"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.034299,24.935553),
			new google.maps.LatLng(35.033969,24.935486),
			new google.maps.LatLng(35.033820,24.935955),
			new google.maps.LatLng(35.034237,24.936049)
		],
		dimos: "gortinas",
		oikismos: "Χουστουλιανά", 
		onoma: "",
		perigrafi:"Πρώην Δημοτικό Σχολείο"
	}, 
	{
		paths: [
			new google.maps.LatLng(34.986374,24.991705),
			new google.maps.LatLng(34.986203,24.991778),
			new google.maps.LatLng(34.986315,24.992091),
			new google.maps.LatLng(34.986462,24.991933)
		],
		dimos: "gortinas",
		oikismos: "Βασιλική", 
		onoma: "",
		perigrafi:"Πρώην Δημοτικό Σχολείο"
	}, 
	{
		paths: [
			new google.maps.LatLng(35.009676,24.965892),
			new google.maps.LatLng(35.009368,24.965878),
			new google.maps.LatLng(35.009504,24.966645),
			new google.maps.LatLng(35.009731,24.966567)
		],
		dimos: "gortinas",
		oikismos: "Βασιλικά Ανώγεια", 
		onoma: "",
		perigrafi:"Αλσύλιο"
	}
	
	/************************ TELOS dimos Gortynas *******************************/	
];



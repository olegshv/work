var array = new Array(
	{
		'id': 'Meagan',
		'contactHeaderBlock': 'Meagan Fisher',
		'contactNameBlock': 'Meagan Fisher, Ms',
		'contactTypeBlock': 'Technical Lead',
		'contactStatusBlock': 'AIG Canada',
		'contactInterestedInBlock': 'American International Group',
		'contactPhoneBlock': '621-032-1715',
		'contactWebBlock': 'www.aig.com/ca',
		'contactMailInBlock': 'megan.fisher@aig.com'
		
	},
	{
		'id': 'Eddie',
		'contactHeaderBlock': 'Eddie Lobanovskiy',
		'contactNameBlock': 'Eddie Lobanovskiy',
		'contactTypeBlock': 'Account Manager',
		'contactStatusBlock': 'AIG Canada',
		'contactInterestedInBlock': 'American International Group',
		'contactPhoneBlock': '416-596-3000',
		'contactWebBlock': 'www.aig.com/ca',
		'contactMailInBlock': 'eddie.lobanovskiy@aig.com'
	},
	{
		'id': 'Kerem',
		'contactHeaderBlock': 'Kerem Suer',
		'contactNameBlock': 'Kerem Suer',
		'contactTypeBlock': 'Recruitment Specialist',
		'contactStatusBlock': 'AIG Canada',
		'contactInterestedInBlock': 'American International Group',
		'contactPhoneBlock': '604-684-1514',
		'contactWebBlock': 'www.aig.com/ca',
		'contactMailInBlock': 'kerem.suer@aig.com'
	},
	{
		'id': 'Dan',
		'contactHeaderBlock': 'Dan Cederholm',
		'contactNameBlock': 'Dan Cederholm',
		'contactTypeBlock': 'Account Manager',
		'contactStatusBlock': 'AIG Canada',
		'contactInterestedInBlock': 'American International Group',
		'contactPhoneBlock': '514-842-0603',
		'contactWebBlock': 'www.aig.com/ca',
		'contactMailInBlock': 'dan.calderholm@aig.com'
	}
);


$( document ).ready(function() {
	//когда страница загружается
	$(".ContMenu").click(function(){
		var id = this.id;
		//функция поиска контакта из коллекции(массива по айдишнику)
		var item = findById(array, id);
		
		if(item){
			for(var property in item) {
				if(property != "id")
					setValueIntoDiv(property, item[property])
			}
		}
		
	});
});

function findById(source, id) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].id === id) {
      return source[i];
    }
  }
}

function setValueIntoDiv(divClass, value) {
	if(value !== "")
		$( "." + divClass ).text( value );
	else
		$( "." + divClass ).html( "&nbsp" );
}
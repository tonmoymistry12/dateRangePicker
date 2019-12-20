class DatePicker extends HTMLElement { 
	constructor () {
	  super() 
		const date_picker_element_inDom = document.createElement('div');
		date_picker_element_inDom.className = "date-picker";

		const selected_date_element_inDom = document.createElement('div');
		selected_date_element_inDom.className = "selected-date";
		date_picker_element_inDom.appendChild(selected_date_element_inDom);

		const dates_element_inDom = document.createElement('div');
		dates_element_inDom.className ="dates";
		date_picker_element_inDom.appendChild(dates_element_inDom)

		const month_element_inDom = document.createElement('div');
		month_element_inDom.className = "month";
		dates_element_inDom.appendChild(month_element_inDom);

		const prev_mth_element_inDom = document.createElement('div');
		prev_mth_element_inDom.className = "arrows prev-mth";
		month_element_inDom.appendChild(prev_mth_element_inDom);

		const mth_element_inDom = document.createElement('div');
		mth_element_inDom.className = "mth";
		month_element_inDom.appendChild(mth_element_inDom);

		const next_mth_element_inDom = document.createElement('div');
		next_mth_element_inDom.className = "arrows next-mth";
		month_element_inDom.appendChild(next_mth_element_inDom);

		const days_element_inDom = document.createElement('div');
		days_element_inDom.className = "days";
		dates_element_inDom.appendChild(days_element_inDom);

		const dates_element2_inDom = document.createElement('div');
		dates_element2_inDom.className ="dates2";
		date_picker_element_inDom.appendChild(dates_element2_inDom);

		const month_element2_inDom = document.createElement('div');
		month_element2_inDom.className = "month2";
		dates_element2_inDom.appendChild(month_element2_inDom);

		const prev_mth_element2_inDom = document.createElement('div');
		prev_mth_element2_inDom.className = "arrows prev-mth2";
		month_element2_inDom.appendChild(prev_mth_element2_inDom);

		const mth_element2_inDom = document.createElement('div');
		mth_element2_inDom.className = "mth2";
		month_element2_inDom.appendChild(mth_element2_inDom);

		const next_mth_element2_inDom = document.createElement('div');
		next_mth_element2_inDom.className = "arrows next-mth2";
		month_element2_inDom.appendChild(next_mth_element2_inDom);

		const days_element2_inDom = document.createElement('div');
		days_element2_inDom.className = "days2";
		dates_element2_inDom.appendChild(days_element2_inDom);
        const x = document.querySelector("date-picker");
		x.appendChild(date_picker_element_inDom);
		const date_picker_element = date_picker_element_inDom;
		const selected_date_element = selected_date_element_inDom;
		const dates_element = dates_element_inDom;
		const mth_element = mth_element_inDom;
		const next_mth_element = next_mth_element_inDom;
		const prev_mth_element = prev_mth_element_inDom;
		const days_element = days_element_inDom;

		const dates_element2 = dates_element2_inDom;
		const mth_element2 = mth_element2_inDom;
		const next_mth_element2 = next_mth_element2_inDom;
		const prev_mth_element2 = prev_mth_element2_inDom;
		const days_element2 = days_element2_inDom;
		prev_mth_element2.innerHTML="&laquo;";
		prev_mth_element.innerHTML="&laquo;";
		next_mth_element2.innerHTML="&raquo;";
		next_mth_element.innerHTML="&raquo;";

		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const months2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		let date = new Date();
		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();

		let date1 = new Date();
		let day1 = date.getDate();
		let month1 = date.getMonth();
		let year1 = date.getFullYear();

		let selectedDate = date;
		let selectedDay = day;
		let selectedMonth = month;
		let selectedYear = year;

		let selectedDate2 = date1;
		let selectedDay2 = day1;
		let selectedMonth2 = month1;
		let selectedYear2 = year1;
        let amount_days = 31;
		mth_element.textContent = months[month] + ' ' + year;
		mth_element2.textContent = months2[month1] + ' ' + year1;
		let date_1 = formatDate(date);
		let date_2 = formatDate2(date);
		selected_date_element.textContent = date_1 + " - "+date_2;
		selected_date_element.dataset.value = selectedDate;
		populateDates();
		populateDates2();
		// EVENT LISTENERS
		date_picker_element.addEventListener('click', toggleDatePicker);
		next_mth_element.addEventListener('click', goToNextMonth);
		prev_mth_element.addEventListener('click', goToPrevMonth);
		next_mth_element2.addEventListener('click', goToNextMonth2);
		prev_mth_element2.addEventListener('click', goToPrevMonth2);

		// FUNCTIONS
function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
		dates_element2.classList.toggle('active');
	}
	
}

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	
	populateDates();
}
function goToNextMonth2 (e) {
	month1++;
	if (month1 > 11) {
		month1 = 0;
		year1++;
	}
	mth_element2.textContent = months2[month1] + ' ' + year1;
	populateDates2();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	
	populateDates();
}
function goToPrevMonth2 (e) {
	month1--;
	if (month1 < 0) {
		month1 = 11;
		year1--;
	}
	mth_element2.textContent = months2[month1] + ' ' + year1;
	populateDates2();
}

function populateDates (e) {
	
	days_element.innerHTML = '';
	if (month == 3 || month == 5 || month==8 || month==11) {
		amount_days = 30;
	}
	
	if (month == 0 || month == 2 || month==4 || month==6 || month==7 || month==9 || month==10) {
		amount_days = 31;
	}
	
	for (let i = 0; i < amount_days; i++) {
			const day_element = document.createElement('div');
			
			day_element.classList.add('day');
			
			day_element.textContent = i + 1;
			
			if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
				day_element.classList.add('selected');
				
			}
	
			day_element.addEventListener('click', function () {
				selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
				selectedDay = (i + 1);
				selectedMonth = month;
				selectedYear = year;
	
				selected_date_element.textContent = formatDate(selectedDate)+" - "+formatDate2(selectedDate2);
				selected_date_element.dataset.value = selectedDate;
	
				populateDates();
			});
			
	       days_element.appendChild(day_element);
		
		}

}
function populateDates2 () {
	days_element2.innerHTML = '';
	if (month == 1 || month1 == 1 ) {
		amount_days = 28;
	}
	if (month1 == 3 || month1 == 5 || month1 == 8 || month1 == 11) {
		amount_days = 30;
	}
	for (let j = 0; j < amount_days; j++) {
		const day_element2 = document.createElement('div');
		day_element2.classList.add('day2');
		day_element2.textContent = j + 1;
		if (selectedDay2 == (j + 1) && selectedYear2 == year1 && selectedMonth2 == month1) {
			day_element2.classList.add('selected');
		}

		day_element2.addEventListener('click', function () {
			selectedDate2 = new Date(year1 + '-' + (month1 + 1) + '-' + (j + 1));
			selectedDay2 = (j + 1);
			selectedMonth2 = month1;
			selectedYear2 = year1;
			selected_date_element.textContent = formatDate(selectedDate)+" - "+formatDate2(selectedDate2);
			selected_date_element.dataset.value = selectedDate2;

			populateDates2();
		});

		days_element2.appendChild(day_element2);
	}
}

// VALIDATING ELEMENTS FUNCTIONS
	function checkEventPathForClass (path, selector) {
		for (let i = 0; i < path.length; i++) {
			if (path[i].classList && path[i].classList.contains(selector)) {
				return true;
			}
		}
		
		return false;
	}
	function formatDate (d) {
		let day = d.getDate();
		if (day < 10) {
			day = '0' + day;
		}

		let month = d.getMonth() + 1;
		if (month < 10) {
			month = '0' + month;
		}

		let year = d.getFullYear();

		return day + ' / ' + month + ' / ' + year;
	}
	function formatDate2 (d) {
		let day = d.getDate();
		if (day < 10) {
			day = '0' + day;
		}

		let month = d.getMonth() + 1;
		if (month < 10) {
			month = '0' + month;
		}

		let year = d.getFullYear();

		return day + ' / ' + month + ' / ' + year;
	}
}

}
  
customElements.define('date-picker', DatePicker);
  


















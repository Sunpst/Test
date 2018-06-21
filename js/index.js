window.onload = function() {
	var demol = document.getElementById("demolList").getElementsByTagName("ul")[0],
		studyAddress = document.getElementById("stydyAddress").getElementsByTagName("ul")[0],
		inputValue = document.getElementById("allseach"),
		closeDialog = document.getElementById("closeDialog"),
		summaryul = document.getElementById("summary").getElementsByTagName("ul")[0],
		Explain = document.getElementById("Explain"),
		dialog = document.getElementsByClassName("dialog")[0],
		dialogUl = document.getElementById("dialogUl");
	var demolData = [],
		studyData = [],
		dialogData = [],
		summaryData= [],
		allbuidData = {};

	function getAjax() {
		var dataBox = new XMLHttpRequest();
		dataBox.open("GET", './data/data1.json', true);
		dataBox.send(null);
		dataBox.onreadystatechange = function() {
			if(dataBox.readyState === 4) {
				if(dataBox.status === 200) {
					var alltableData = JSON.parse(dataBox.responseText).allData;
					demolData = alltableData.case.tableData;
					summaryData = alltableData.summary.tableData;
					studyData = alltableData.studyAddress.tableData;
						dataUpdate();
				} else {}
			} else {}
		};
	}
	getAjax();

	closeDialog.onclick = function() {
		dialog.style.display = "none";
		dialogData = [];
		dialogUl.innerHTML = "";
		inputValue.value = "";
	};

	function dataUpdate() {
		for(let i = 0; i < demolData.length; i++) {
			let oli = document.createElement("li");
			oli.innerHTML = demolData[i].caseName;
			demol.appendChild(oli);
		}
		for(let i = 0; i < studyData.length; i++) {
			let oli = document.createElement("li");
			oli.innerHTML = studyData[i].caseName;
			studyAddress.appendChild(oli);
		}
		for(let i = 0; i < summaryData.length; i++) {
			let oli = document.createElement("li");
			oli.innerHTML = summaryData[i].caseName;
			summaryul.appendChild(oli);
		}
	};
	studyAddress.onclick = function(ev) {
		let oEvent = ev || window.event;
		let target = oEvent.target || oEvent.srcElement;
		if(target.nodeName == "LI") {
			let oli = studyAddress.getElementsByTagName("li");
			for(let item in oli) {
				if(oli[item] == target) {
					window.open(studyData[item].caseUrl, '_blank')
				}
			}
		}
	};
	studyAddress.onmouseover = function(ev) {
		let oEvent = ev || window.event;
		let target = oEvent.target || oEvent.srcElement;
		if(target.nodeName == "LI") {
			let oli = studyAddress.getElementsByTagName("li");
			for(let item in oli) {
				if(oli[item] == target) {
					Explain.style.display="block";
					Explain.innerHTML=studyData[item].caseUrl
				}
			}
		}
	};
	studyAddress.onmouseout = function(ev) {
		Explain.style.display="node";
	};
	demol.onclick = function(ev) {
		let oEvent = ev || window.event;
		let target = oEvent.target || oEvent.srcElement;
		if(target.nodeName == "LI") {
			let oli = demol.getElementsByTagName("li");
			for(let item in oli) {
				if(oli[item] == target) {
					window.open(demolData[item].caseUrl, '_blank')
				}
			}
		}
	};
	demol.onmouseover = function(ev) {
		let oEvent = ev || window.event;
		let target = oEvent.target || oEvent.srcElement;
		if(target.nodeName == "LI") {
			let oli = demol.getElementsByTagName("li");
			for(let item in oli) {
				if(oli[item] == target) {
					Explain.style.display="block";
					Explain.innerHTML=demolData[item].caseUrl
				}
			}
		}
	};
	demol.onmouseout = function(ev) {
		Explain.style.display="node";
	};
	dialogUl.onclick = function(ev) {
		let oEvent = ev || window.event;
		let target = oEvent.target || oEvent.srcElement;
		if(target.nodeName == "LI") {
			let oli = dialogUl.getElementsByTagName("li");
			for(let item in oli) {
				if(oli[item] == target) {
//					var fso = new ActiveXObject("Scripting.FileSystemObject")
					window.open(dialogData[item].caseUrl, '_blank')
				}
			}
		}
	};
	dialogUl.onmouseover = function(ev) {
		let oEvent = ev || window.event;
		let target = oEvent.target || oEvent.srcElement;
		if(target.nodeName == "LI") {
			let oli = dialogUl.getElementsByTagName("li");
			for(let item in oli) {
				if(oli[item] == target) {
					Explain.style.display="block";
					Explain.innerHTML=dialogData[item].caseUrl
				}
			}
		}
	};
	dialogUl.onmouseout = function(ev) {
		Explain.style.display="node";
	};
	summaryul.onclick = function(ev) {
		let oEvent = ev || window.event;
		let target = oEvent.target || oEvent.srcElement;
		if(target.nodeName == "LI") {
			let oli = summaryul.getElementsByTagName("li");
			for(let item in oli) {
				if(oli[item] == target) {
					
				}
			}
		}
	};
	summaryul.onmouseout = function(ev) {
		Explain.style.display="node";
	};
		//打开某i个
	function openfile() {
		var opso = new ActiveXObject("Scripting.FileSystemObject");
		opso.OpenTextFile("c:\\testfile.txt", ForReading);

	}
	inputValue.onchange = function() {
		dialog.style.display = "block";
		var oli = demol.getElementsByTagName("li");
		var ooli = studyAddress.getElementsByTagName("li");
		for(let i = 0; i < oli.length; i++) {
			if(oli[i].innerHTML.indexOf(inputValue.value) >= 0) {
				let kk = {};
				kk = demolData[i]
				kk.come = "demol";
				dialogData.push(kk);
			}
		};
		for(let i = 0; i < ooli.length; i++) {
			if(ooli[i].innerHTML.indexOf(inputValue.value) >= 0) {
				let kk = {};
				kk = studyData[i];
				kk.come = "adress";
				dialogData.push(kk);
			}
		};
		for(let i = 0; i < dialogData.length; i++) {
			let oli = document.createElement("li");
			oli.innerHTML = dialogData[i].caseName;
			if(dialogData[i].come == "demol") {
				oli.style.background = "#eeeeee";
			} else if(dialogData[i].come == "adress") {
				oli.style.background = "#79ff79";
			}
			dialogUl.appendChild(oli);
		};
	}

}
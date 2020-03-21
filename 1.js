const bio = (String, Angka) => {
    let biodata = {
        name : String,
        age : Angka,
        address : "Jl. Pedongkelan No.51 Cilincing Jakarta Utara",
	    hobbies : ["Koding", "Membaca Buku", "Menonton"],
	    is_married : false,
	    list_school : [
		{
		  name : "SMAN 52 Jakarta",
		  year_in : 2015,
		  year_out : 2018,
		  major : "IPA"
		},
		{
		  name : "MTsN 5 Jakarta",
		  year_in : 2012,
		  year_out : 2015,
		  major : null
		},
		{
		  name :"SDN 01 Semper Timur",
		  year_in : 2006,
		  year_out : 2012,
		  major : null
		}
	    ],
	    skills : [
		{
		  skill_name : "html",
		  level : "beginner"
		},
		{
		  skill_name: "javascript",
		  level : "beginner"
		},
		{
		  skill_name : "php",
		  level : "beginner"
		}
	     ],
	    interest_in_coding : true
    }
    return JSON.stringify(biodata)
}

// untuk menjalankan : console.log(bio("Rizky Agung Pratama", 19));

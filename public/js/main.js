$(document).ready(function () {
    $(document).ready(function () {

        $('#submitFinancials').on('click', e => {
            var department = $('#financialsDepartment').val();
            var startDate = $('#financialsStartDate').val();
            var endDate = $('#financialsEndDate').val();
            var info = $('#financialsInfo').val();
            var depOption;


            switch (department) {
                case "Fire Department":
                    // code block
                    depOption = "Fire";
                    console.log("Fire");
                    getDataForFinancials(depOption, startDate, endDate, info);
                    break;
                case "Police Department":
                    // code block
                    depOption = "Police";
                    console.log("Police");
                    getDataForFinancials(depOption, startDate, endDate, info);
                    break;
                case "Department of Health Services":
                    // code block
                    depOption = "Hospital";
                    console.log("Health");
                    getDataForFinancials(depOption, startDate, endDate, info);
                    break;
                case "Parks and Recreation":
                    // code block
                    depOption = "Parks";
                    console.log("Parks");
                    getDataForFinancials(depOption, startDate, endDate, info);
                    break;
                case "Sewage & Waste Managment":
                    // code block
                    depOption = "Sewage";
                    console.log("Sewage");
                    getDataForFinancials(depOption, startDate, endDate, info);
                    break;

                default:
                    // code block
                    //code 
                    console.log("Running default");
                    console.log("DEPARTMENT: " + department);
            }

        });
    });
});


function getDataForFinancials(department, startDate, endDate, info) {
    console.log("Department: " + department + " StartDate:" + startDate + " EndDate:" + endDate + " Info:" + info);

    startDate = startDate + "-01-01";
    endDate = endDate + "-12-31";



    $.ajax({
        method: 'GET',
        // contentType: 'application/json; charset=utf-8',
        url: "http://localhost:8081/search/" + department + "/" + startDate + "/" + endDate + "/" + info + "/json",
        success: function loginSuccess(succ) {
            console.log("Succ:" + succ);
            console.log(succ);
            if (info == "Revenue") {

            } else {

                var contentToRemove = document.querySelectorAll("#DELETETHIS");
                $(contentToRemove).remove();
                contentToRemove = document.querySelectorAll("#newlyAppened");
                $(contentToRemove).remove();
                succ.forEach(function (obj) {
                    var sum = sum+obj.amount;
                    $('#financialAppend').after(`<tr id="newlyAppened" style="background-color: #f7f7f7;"><td class="item-col item"><table cellspacing="0" cellpadding="0" width="100%"><tr><td class="product"><span style="color: #4d4d4d; font-weight:bold; padding-left: 15px;">${obj.organization} Department</span></td></tr></table></td><td class="item-col">${obj.description}</td><td class="item-col">${obj.date}</td><td class="item-col">$${obj.amount}</td></tr>`);
                });
            }
        },
        error: function onError(err) {
            console.log("Error hit")
        }
    });


}
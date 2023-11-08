// fetchdata_itemFive();
// itemFive_filldata();


function cleardata_itemFive() {
  $('#IT5_ID').dxTextBox("instance").option("value","");
  $('#IT5_ModelDate').dxTextBox("instance").option("value","");
  $('#IT5_MatchingModels').dxTextBox("instance").option("value","");
  $('#IT5_ModelOptions').dxTextArea("instance").option("value","");

}

function checkdata_itemFive() {
    if ($('#IT5_ModelDate').dxTextBox("instance").option("value")=='') {
        error_IT5_ModelDate = "Require ";
        $('#error_IT5_ModelDate').text(error_IT5_ModelDate);
    } else {
        error_IT5_ModelDate = "";
        $('#error_IT5_ModelDate').text(error_IT5_ModelDate);
    }
    if ($('#IT5_MatchingModels').dxTextBox("instance").option("value")=='') {
        error_IT5_MatchingModels = "Require ";
        $('#error_IT5_MatchingModels').text(error_IT5_MatchingModels);
    } else {
        error_IT5_MatchingModels = "";
        $('#error_IT5_MatchingModels').text(error_IT5_MatchingModels);
    }
    if ($('#IT5_ModelOptions').dxTextArea("instance").option("value")=='') {
        error_IT5_ModelOptions = "Require ";
        $('#error_IT5_ModelOptions').text(error_IT5_ModelOptions);
    } else {
        error_IT5_ModelOptions = "";
        $('#error_IT5_ModelOptions').text(error_IT5_ModelOptions);
    }

}

function insertdata_itemFive() {
    var url = "itemFive";
    var data = {
        'IT5_FK_IT4': $('#IT5_FK_IT4').dxTextBox("instance").option("value"),
        'IT5_ModelDate': $('#IT5_ModelDate').dxTextBox("instance").option("value"),
        'IT5_MatchingModels': $('#IT5_MatchingModels').dxTextBox("instance").option("value"),
        'IT5_ModelOptions': $('#IT5_ModelOptions').dxTextArea("instance").option("value"),
    };
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        method: "POST",
        url: url,
        data: data,
        success: function (response) {
            DevExpress.ui.notify({
                message: response.status,
                position: {
                  my: 'top left',
                  at: 'top left'
                },
                type:'success',
                width: '300',
                height:'150',
                hideAfter: 2000
              });
            fetchdata_itemFour();
            cleardata_itemFive();
        }
    });
}

function updatedata_itemFive() {
    var url = 'itemFive/';
    var data = {
        'IT5_ID': $('#IT5_ID').dxTextBox("instance").option("value"),
        'IT5_FK_IT4': $('#IT5_FK_IT4').dxTextBox("instance").option("value"),
        'IT5_ModelDate': $('#IT5_ModelDate').dxTextBox("instance").option("value"),
        'IT5_MatchingModels': $('#IT5_MatchingModels').dxTextBox("instance").option("value"),
        'IT5_ModelOptions': $('#IT5_ModelOptions').dxTextArea("instance").option("value"),

    };
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        method: "PUT",
        url: url + 'update',
        data: data,
        success: function (response) {
            DevExpress.ui.notify({
                message: response.status,
                position: {
                  my: 'top left',
                  at: 'top left'
                },
                type:'warning',
                width: '300',
                height:'150',
                hideAfter: 2000
              });
        fetchdata_itemFour();


        }
    });
}

//#region Create Components

$(document).ready(function () {
    $(() => {
        $("#IT5_ModelOptions").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "تفاصيل الطراز",
        });
    });
    $(() => {
        $("#IT5_ID").dxTextBox({
            placeholder: "ت",
            inputAttr: { "aria-label": "IT5 ID" },
        });
    });
    $(() => {
        $("#IT5_FK_IT4").dxTextBox({
            placeholder: "الارتباط",
            inputAttr: { "aria-label": "IT5_FK_ID4" },
        });
    });
    $(() => {
        $("#IT5_MatchingModels").dxTextBox({
            placeholder: "ادخل الطراز",
            inputAttr: { "aria-label": "Models" },
        });
    });
    $(() => {
        $("#IT5_ModelDate").dxTextBox({
            placeholder: "تاريخ الانتاج",
            inputAttr: { "aria-label": "Model Date" },
        });
    });

    // $("#Popup").dxPopup({
    //     // ...
    //     showTitle: true,
    //     title: "Deleting...",
    //     width: 500,
    //     height: 'auto',
    //     visible: false, // Set this to true to show the popup by default
    //     dragEnabled: true, // Allow dragging the popup
    //     hideOnOutsideClick: true,
    //     resizeEnabled: true,
    //     position: {
    //         my: 'top', // Position the popup at the center of the screen
    //         at: 'top',
    //         of: window,
    //     },
    //     contentTemplate: () => {
    //         const content = $("<div />");
    //         content.append(
    //             $(popupText).css("font-size",'1.2rem'),
    //             $(Delete),
    //         );
    //         return content;
    //     },
    // });
    // const popupText = `<p>Are Your Sure To Delete This Row</p>`;
    // const Delete = $("<div>");
    // Delete.dxButton({
    //     stylingMode: "contained",
    //     text: "Delete",
    //     type: "danger",
    //     icon: "trash",
    //     width: 120,
    //     onClick() {
    //         console.log("buttons");
    //     },
    // });
});



//#endregion

//#region  buttons

$("#btnSaveItemFifth").dxButton({
    stylingMode: "contained",
    text: "حفظ",
    type: "default",
    icon: "check",
    width: 120,
    onClick() {
        let IT5_ID = $("#IT5_ID").dxTextBox("instance").option("value");

        if (IT5_ID == null || IT5_ID == "") {
            checkdata_itemFive();
            if (error_IT5_ModelDate != "" || error_IT5_MatchingModels != ""
            || error_IT5_ModelOptions !="") {
                return false;
            } else {
                insertdata_itemFive();

            }
        } else {
            checkdata_itemFive();
            if (error_IT4_DateRange != "" || error_IT4_Model != "") {
                return false;
            } else {
                updatedata_itemFive();
            }
        }
    },
});
$("#btnCloseItemFifth").dxButton({
    stylingMode: "contained",
    text: "اغلاق",
    type: "danger",
    icon: "close",
    width: 120,
    onClick() {
        cleardata_itemFive();
        let display = document.getElementById("ItemFifthaction");
        display.style.display = "none";
        document.getElementById("FourthCard").scrollIntoView();
    },
});
//#endregion

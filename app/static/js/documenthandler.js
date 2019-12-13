$(document).ready(function() {
  $("#SurveyButton").click(function() {
    $.get( "/get_survey", $("#SurveyForm input").serialize(),
            function(data) {
              x=data;
              if (x == '1'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeV68eeLYrLjn0tbfUee1w-HmnGLlmcMGgeINVluKPhFdLRow/viewform?usp=sf_link";
                }
                if (x == '2'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeMZEkAyBB-C96nn6tgUBEMSwmWcPuWrAGukCcmHzureSDxxw/viewform?usp=sf_link";
                }
                if (x == '3'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdqKTN8hSB2vYKnO1W11aOhwlOqBysn-MyRoqi-IyKc4uMXiQ/viewform?usp=sf_link";
                }
                if (x == '4'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfPXYfK2t_ZeZAlcN14sPNEdJJrSYr3DN4loidbBUl2YbVOdw/viewform?usp=sf_link";
                }
                if (x == '5'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfwZYvfaf0iCa-FVh8xL2ESGnPaY8Hkc7J2bYXF9EcX4JLkIA/viewform?usp=sf_link";
                }
                if (x == '6'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdMdpj495f2slmiicHSO1J8hK6rf5GFyHkwMu8R2JXynGmtGw/viewform?usp=sf_link";
                }
                if (x == '7'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfBtVuth2IIRvcD1PQuSMr6AfbNkdEFWf4j0SYT-dHL0-dNdQ/viewform?usp=sf_link";
                }
                if (x == '8'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfSunrMLUWiP0wmSu74RagM9P4x0w1PWK0pVm1J2g3A_2f6Pw/viewform?usp=sf_link";
                }
                if (x == '9'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeaG_zjMoR_Bjfw6rLq6hXZq9PlSO5AKlAUhX0bRUP8sjNM6w/viewform?usp=sf_link";
                }
                if (x == '10'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfIqM5yQ6_3BaXwMNaNz9w8R0r28KNdVrHvIAg4RIb0dj7eHg/viewform?usp=sf_link";
                }
                if (x == '11'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdUW8PRwj0JsvKPWG6zmJllrcuVQO9QmlLQxKf8s1skPrtBMA/viewform?usp=sf_link";
                }
                if (x == '12'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfoNj8R2Hc10CMh5NvdCq9jDpFz-S679ThpUtDuB4De2FSvnQ/viewform?usp=sf_link";
                }
                if (x == '13'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdhgQHWkXIrPx_eyRoIdAKV_ENaZ75nN4Imd1fy17nYaUynVQ/viewform?usp=sf_link";
                }
                if (x == '14'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdQu9-AwUbNlg2skDdhgrRkSvizyNiLTk6EnA8vUeD9LGkh8Q/viewform?usp=sf_link";
                }
                if (x == '15'){
                window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfofQm4Qi3kzsOLawQEbnCb1nxqtUx_wPafIc-1UtISZZbV2Q/viewform?usp=sf_link";
                }
            }
          )

  })
})
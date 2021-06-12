$(document).ready(function () {
    $('#btn_title_voice').mousedown(function () {
        $(this).css({'background-color': '#212121', 'color': '#d50000'});

        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        let container = document.querySelector("#list_name");

        const recognition = new SpeechRecognition();
        recognition.lang = "fa-IR";
        recognition.interimResults = true;

        recognition.start();
        recognition.addEventListener("end", recognition.start);

        recognition.addEventListener("result", e => {
            let transcript = Array.from(e.results)
                .map(result => {
                    return result[0];
                })
                .map(result => {
                    return result.transcript;
                })
                .join(" ");

            if (transcript.includes("علامت سوال")) {
                transcript = transcript.replace("علامت سوال", "؟");
            } else if (transcript.includes("ویرگول")) {
                transcript = transcript.replace("ویرگول", "،");
            } else if (transcript.includes("نقطه")) {
                transcript = transcript.replace("نقطه", ".");
            } else if (transcript.includes("متن پاک شود") && e.results[0].isFinal) {
                container.value = "";
            } else if (transcript.includes("کلمه پاک شود") && e.results[0].isFinal) {
                var last_word = container.value.slice(0, container.value.length - 1);
                last_word = last_word.slice(0, last_word.lastIndexOf(' '));
                container.value = last_word;
            } else if (e.results[0].isFinal) {
                var talk = transcript + " ";
                if (container.value.length + talk.length < 50) {
                    container.value = container.value + talk;
                }
            }

            console.log(transcript);
        });

        $(this).mouseup(function () {
            recognition.removeEventListener("end", recognition.start)
            recognition.stop();
            $(this).css({'background-color': '#FFFFFF', 'color': '#424242', 'outline': 'none'});
        })
    });

    $('#btn_explain_voice').mousedown(function () {
        $(this).css({'background-color': '#212121', 'color': '#d50000'});

        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        let container = document.querySelector("#list_explain");

        const recognition = new SpeechRecognition();
        recognition.lang = "fa-IR";
        recognition.interimResults = true;

        recognition.start();
        recognition.addEventListener("end", recognition.start);

        recognition.addEventListener("result", e => {
            let transcript = Array.from(e.results)
                .map(result => {
                    return result[0];
                })
                .map(result => {
                    return result.transcript;
                })
                .join(" ");

            if (transcript.includes("علامت سوال")) {
                transcript = transcript.replace("علامت سوال", "؟");
            }

            if (transcript.includes("ویرگول")) {
                transcript = transcript.replace("ویرگول", "،");
            }

            if (transcript.includes("نقطه")) {
                transcript = transcript.replace("نقطه", ".");
            }

            if (transcript.includes("متن پاک شود") && e.results[0].isFinal) {
                container.value = "";
                transcript = transcript.replace("متن پاک شود", "");
            }

            if (transcript.includes("کلمه پاک شود") && e.results[0].isFinal) {
                var last_word = container.value.slice(0, container.value.length - 1);
                last_word = last_word.slice(0, last_word.lastIndexOf(' '));
                container.value = last_word;
                transcript = transcript.replace("کلمه پاک شود", "");
            }

            if (transcript.includes("برو خط بعدی") && e.results[0].isFinal) {
                container.value = container.value + '\r\n';
            }

            if (e.results[0].isFinal) {
                var talk = transcript + " ";
                if (container.value.length + talk.length < 150) {
                    container.value = container.value + talk;
                }
            }

            console.log(transcript);
        });

        $(this).mouseup(function () {
            recognition.removeEventListener("end", recognition.start)
            recognition.stop();
            $(this).css({'background-color': '#FFFFFF', 'color': '#424242', 'outline': 'none'});
        })
    });
})
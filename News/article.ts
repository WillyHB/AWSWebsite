fetch("./NewsJson.json")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.Title.length; i++) {

            var template = document.getElementsByTagName("template")[0] !;
            var clone = template.content.cloneNode(true);

            document.body.appendChild(clone);

            document.getElementById("popup-null") !.id = `popup-${i}`;
            document.getElementsByClassName("articleTitle")[i]!.textContent = data.Title[i];
            document.getElementsByClassName("articleText")[i]!.textContent = data.Text[i];
        }

    });

var index: number = 0;

function Clicked(i: number) {
    document.body.style.overflow = "hidden";

    document.getElementById(`popup-${i}`)!.classList.add("active");
    index = i;

    window.addEventListener("keydown", (event) => 
    {
        if (event.key == "Escape") {

            escaped();
        }
    });
}

function escaped() 
{
    document.body.style.overflow = "auto";
    window.removeEventListener;
    document.getElementById(`popup-${index}`)!.classList.remove("active");
}
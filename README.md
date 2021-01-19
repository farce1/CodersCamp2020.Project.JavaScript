# Coders Camp 2020 | Projekt Zespołowy | JavaScript

## Spis treści

- Projekt — Zespół projektowy
- Podział zadań
- Projekt — JavaScript - StarWarsQuiz
- Technologia projektu
- Przegląd projektu
- Dostępne skrypty
- Wersja demo

### Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp](CodersCamp.pl).
Aplikację wykonali uczestnicy kursu przy pomocy mentora.
Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

**Mentor**: [Grzegorz Sztuczyński](https://github.com/farce1)

**Uczestnicy**:

- [Izabela Nowak](https://github.com/In2106)
- [Justyna Sobczak](https://github.com/s-justina) (Product Owner)
- [Natalia Dębska](https://github.com/talcia)
- [Natalia Jagielska](https://github.com/Natal1a)
- [Olaf Koziara](https://github.com/Olaf-Koziara) (Tech Lead)
- [Miron Weltrowski](https://github.com/miron54) (Development Manager)

### Podział zadań:

W trakcie trwania projektu wyznaczono w zespole odpowiednie funkcje:

##### Tech Lead - Olaf

Tu obecne jest zawsze ostateczne zdanie w kwestiach związanych z technologią.
Tech Lead przeprowadza Code Review zadań, dzięki czemu praca idzie szybko i sprawnie.

##### Product Owner - Justyna

Wizja produktu i kwestie związane z funkcjonalnościami.
Podejmuje wszelkie podjęte decyzje odnośnie wątpliwości związanych z wymaganiami.

##### Development Manager - Miron

Koordynacja zespołem nieustannie kontrolowana.
Development Manager odpowiada za podział zadań oraz kontrolę jakości pracy.
Przeprowadza codzienne daily, dzięki czemu zespół wie na czym stoi.

### Projekt — JavaScript - StarWarsQuiz

Projekt powstał w ramach kursu CodersCamp 2020. Jest to drugi projekt
z serii projektów, które są realizowane podczas kursu.
Ma on charakter zespołowy.
Celem projektu jest utrwalenie wiedzy z języka programowania JavaScript oraz HTML i CSS,
bez korzystania z gotowych bibliotek styli, oraz frameworków.

### Technologia projektu

Projekt powstał w oparciu o czysty JavaScript.
W celu uporządkowania kodu styli, wykorzystano preprocesor CSS (Sass).
W trakcie realizacji projektu posłużono się dodatkową biblioteką, jaką jest axios.
JavaScript - StarWarsQuiz to gra, sprawdzająca znajomość fantastycznego świata gwiezdnych wojen.
Wykorzystano Star Wars API do zrealizowania projektu.
Wykonanie quizu obejęło niżej wymienione zagadnienia, w celu ich utrwalenia:

- zmienne
- operatory porównania
- pętle
- obiekty, atrybuty
- warunki
- funkcje
- operatory logiczne
- tablice
- iteracja i/lub rekurencja
- console
- return
- "===" vs "=="
- integracja z zewnętrznym REST API
- interakcja z domem
- odwoływanie się do elementów DOM z JavaScript
- zmiana stylów z poziomu JSa
- zmiana zawartości HTML z poziomu JSa
- zewnętrzne biblioteki
- async await i/lub Promise
- funkcje callback
- metody HTTP
- pisanie testów jednostkowych

## Przegląd projektu

Jedna ze znanych marek płatków śniadaniowych prowadzi wieloletnią współpracę z wytwórnią filmów Disney, do której od niedawna należą także Gwiezdne Wojny.
W ramach kolejnej akcji promocyjnej powstał projekt przygotowania Proof of Concept aplikacji związanej ze Star Wars.
Po wstępnym rozpoznaniu i analizie biznesowej podjęto decyzję o przygotowaniu quizu sprawdzającego znajomość uniwersum Gwiezdnych Wojen.
Zespół programistów podjął się wyzwania bazując na projekcie wykonanym w figma.

Planowo projekt powinien obejmować:

1. Wybór trybu quizu (People, Vehicles, Spaceships)
2. Opis zasad dla quizu. Obok zasad pokazuje się losowe zdjęcie z danego trybu (dostosowany opis, jeśli np. imię osoby ze zdjęcia jest w opisie zasad).
3. Po rozpoczęciu gry rozpoczyna się odliczanie czasu (2 minuty).
4. Zadaniem gracza jest odpowiedzieć na jak najwięcej pytań w ciągu ustalonego czasu (dodatkowo gracz konkuruje także z komputerem! Komputer tak samo jak gracz próbuje rozpoznać co jest na grafice).
5. W trakcie trwania quizu miecz świetlny pokazuje, ile jeszcze czasu zostało. Po wybraniu odpowiedzi zostaje ukazane przez sekundę czy odpowiedź była dobra czy zła. Następnie pytanie zostaje zmienione na kolejne (prototyp pokazuje jedynie 1 pytanie) i tak do końca czasu.
6. Pytania są generowane w następujący sposób:
   - zostaje pobrany losowy zasób z danego trybu (np people o id 5)
   - zostanie pobrane dla wylosowanego zasobu zdjęcie
   - losowane są 3 odpowiedzi z zapytania do StarWars API. Dla trybu "People" będzie to: https://swapi.co/api/people (jedna brana jest z wcześniej wylosowanego, musi być poprawna)
7. Po ukończeniu czasu wynik gracza zapisywany jest w rankingu dla danej przeglądarki (LocalStorage) i pokazywany jest ranking 3 najlepszych wyników.

## Dostępne skrypty

Po sklonowaniu bieżącego projektu pamiętaj, aby
uruchomić `npm install`, aby zainstalować wszystkie zależności.

#### Uruchomienie projektu

Projekt możesz uruchomić za pomocą komendy:

`npm run start:dev`

Otwórz adres [http://localhost:8765
](http://localhost:8765), aby wyświetlić go w przeglądarce.

#### Uruchomienie testów

Dodając swoje 5 groszy do naszej aplikacji, pamiętaj o pokryciu kodu testami.
Aby uruchomić testy aplikacji, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install` (jeśli nie zrobiłeś już tego wcześniej).
1. Uruchom testy, wykonując komendę: `npm run test`. Testy z raportem pokrycia uruchomisz za pomocą: `npm run test:cov`.

Kod testów umieszczamy w katalogu `test`.

## Wersja demo

Wersja demo powstała przy pomocy GitHub Pages.
Jeżeli chcesz zobaczyć wersję demo kliknij
w [>>link<<](https://farce1.github.io/CodersCamp2020.Project.JavaScript/).

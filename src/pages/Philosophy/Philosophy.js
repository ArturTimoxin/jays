import React from "react";
import title from "../../assets/img/title_jays.png";
import logo from "../../assets/img/before-jays-logo-mini-black.png";
function Philosophy() {
  return (
    <p className="page">
      <h1 className="title-page">PHYLOSOPHY</h1>
      <div className="wrapperArticles">
        <article className="phylosophyArctle">
          <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at fringilla neque. In velit est, volutpat id
            velit non, scelerisque interdum metus. Integer luctus enim leo, vitae facilisis elit consectetur a.
            Vestibulum aliquam id neque in ultricies. Proin bibendum felis et purus tristique, sit amet lobortis elit
            interdum. Phasellus at hendrerit neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sodales justo eu ante pellentesque, ut consectetur urna laoreet. Aliquam dignissim sem sed blandit
            hendrerit. Maecenas dictum urna gravida, fringilla augue a, semper magna. Mauris porta nulla non lacus
            efficitur, et auctor diam ullamcorper. Donec egestas facilisis sapien. Praesent commodo molestie magna ac
            hendrerit. <br /> <br /> Nam mattis dolor at diam rutrum, eget volutpat enim ullamcorper. Vestibulum eros
            justo, lacinia sed porta mollis, semper at diam. Curabitur et porttitor justo, ac elementum ligula. Praesent
            non convallis turpis. Etiam eu convallis ex, vitae cursus sapien. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Duis quis feugiat est. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam fringilla nunc vel accumsan blandit. Etiam cursus semper tempus.
            Suspendisse eu est tincidunt, congue turpis quis, scelerisque ante. Aliquam accumsan tellus vitae metus
            rhoncus convallis. <br /> <br />
            <img src={logo} id="logo-img" alt="mini-logo-jays" />
            <img src={title} id="title-img" alt="title-jays" />
          </section>
          <section>
            Тому мудрець дотримується в цьому випадку наступного принципу вибору – або, відмовляючись від задоволення,
            він отримує якісь інші і навіть великі насолоди, або, зазнаючи страждання, він позбавляється від більш
            жорстоких.. <br />
            <br />
            Тому мудрець дотримується в цьому випадку наступного принципу вибору – або, відмовляючись від задоволе Але
            при деяких обставинах – або на вимогу боргу, або в силу якоїсь необхідності часто доводиться забувати про
            насолоди і не втікати від тягарів. Вони винні так само, як і ті, хто через душевну слабкість, тобто через
            бажання уникнути страждань і болю відмовляється від виконання свого обов’язку. <br />
            <br />
            Тому м Дійсно, ніхто не відкидає, не зневажає, не уникає насолод тільки через те, що це насолоди, але лише
            через те, що тих, хто не вміє розумно вдаватися насолоді, осягають великі страждання. Якщо скористатися
            найпростішим прикладом, то хто з нас став би займатися якими б то не було тяжкими фізичними вправами, якщо б
            це н Але при деяких обставинах – або на вимогу боргу, або в силу якоїсь необхідності часто доводиться
            забувати про насолоди і не втікати від тягарів. Втім, тут дуже легко і просто провести відмінності, тому що,
            коли ми вільні і нам надана повна можливість вибору бажаного, коли ніщо не заважає нам робити те, що нам
            більше подобається. <br /> <br />
            <img src={logo} id="logo-img" alt="mini-logo-jays" />
            <img src={title} id="title-img" alt="title-jays" />
          </section>
        </article>
      </div>
    </p>
  );
}

export default Philosophy;

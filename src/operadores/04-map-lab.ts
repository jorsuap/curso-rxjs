//laboratorio de tap scroll barra de progreso

import { fromEvent } from "rxjs";
import { filter,map, tap } from 'rxjs/operators'; 

const  text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mauris sed ipsum consequat accumsan. Quisque commodo libero nunc, nec auctor sapien pulvinar sit amet. Morbi enim libero, iaculis sed nibh id, aliquam feugiat ex. Donec vel neque id turpis vestibulum fringilla. Aenean aliquam, dolor et dictum rhoncus, nisi lacus tristique massa, sed lobortis augue velit sit amet neque. Fusce vulputate purus varius dolor scelerisque scelerisque. Sed vel blandit arcu. Curabitur convallis mauris sit amet mauris malesuada suscipit. Suspendisse efficitur lacus non auctor convallis. Nullam ullamcorper imperdiet lorem eu condimentum. Nullam pretium a est sit amet tempor. Nunc at finibus metus, in iaculis dolor. Suspendisse potenti. Proin lacinia, ipsum at convallis elementum, orci nunc pretium lectus, et semper leo ante a lacus. Praesent efficitur nulla non magna tristique suscipit. Maecenas mattis mollis tortor a finibus.
<br/></br>
Praesent hendrerit vestibulum tempus. Curabitur nulla quam, dignissim eget auctor a, egestas in purus. Phasellus molestie suscipit mollis. Ut justo tortor, tempus in luctus ac, efficitur sed est. Maecenas sapien turpis, rhoncus nec dictum vitae, consequat quis justo. Phasellus facilisis, erat a semper lacinia, nisl elit rutrum purus, quis molestie risus sem at orci. Pellentesque quam arcu, commodo vel varius vitae, eleifend ac ipsum.
<br/></br>
Maecenas facilisis vehicula rutrum. Etiam venenatis ex in vulputate fringilla. Integer vestibulum congue ligula sit amet consequat. Ut ut commodo enim. Cras id ante varius, luctus tortor eget, convallis dolor. Mauris varius consectetur auctor. Maecenas ac hendrerit ante. Aenean orci nunc, lacinia non metus id, viverra iaculis est. In hac habitasse platea dictumst. In sodales scelerisque gravida. Pellentesque a turpis nec leo ultrices dapibus in at justo. Etiam laoreet tempus odio ut mollis. Suspendisse vulputate finibus arcu ac accumsan.
<br/></br>
Proin tincidunt rhoncus tempus. Maecenas at justo vitae neque accumsan consectetur cursus sed augue. Mauris at arcu ultrices, mattis tortor vel, venenatis mi. Integer ac est a eros placerat egestas ac et libero. Ut vestibulum interdum volutpat. In aliquet dolor sit amet lectus mattis, sit amet congue ex auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum laoreet tortor mi, ut ornare quam tempor at. Nunc efficitur tellus quis venenatis blandit. Integer ante velit, facilisis efficitur tempor eu, cursus nec urna. Etiam at tempor ex. Maecenas interdum finibus nibh, vitae lacinia lectus imperdiet id.
<br/></br>
Pellentesque ac posuere leo. Aliquam a consectetur arcu. Aenean vitae quam lorem. Phasellus rhoncus nisi metus, sit amet tincidunt ex suscipit ullamcorper. Integer pulvinar facilisis lectus, quis pellentesque est dapibus a. Vivamus efficitur dui accumsan tristique dapibus. Fusce placerat sollicitudin magna, a mattis lacus mattis eget. Fusce gravida bibendum turpis, ut mattis leo tincidunt non. Maecenas tempus nisl et porta consectetur. Nam turpis erat, pellentesque vel quam nec, porta lobortis nunc.`

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//funcion calcule el scroll
const porcentajeScroll  = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop/(scrollHeight-clientHeight)*100);
}

//Streams

const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    // map(event => porcentajeScroll(event))
    map(porcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
});
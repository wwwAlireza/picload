
# Picload

> Make the wait sweeter for the user

[![NPM](https://img.shields.io/npm/v/picload.svg)](https://www.npmjs.com/package/picload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## Docs
 - [installation](#install)
 - [options](#options)
    - [Placeholder](#placeholder)
    - [Random Color](#random-color)
        - [dark](#color-ranges)
        - [light](#color-ranges)
        - [any](#color-ranges)
    - [Color](#color)
    - [Progress](#progress)
        - [circles](#progress-animations)
        - [ring](#progress-animations)
        - [ripple](#progress-animations)
        - [spinner](#progress-animations)
        - [roller](#progress-animations)
        - [progressColor](#progress-color)
        - [progressBg](#progress-background)
        - [ProgressStyle](#progress-style)
        - [custom](#custom-progress)
- [Basic attributes](#basic-attributes)
    - [style](#style)
    - [className](#class-name)
    - [alt](#alt)
    - [ref](#ref)
    
## Install

Install Picload with npm

```bash
  npm i picload
```
```jsx
  import Picload from 'picload'
```
    
## Example Usage
After installation, import it and take advantage of its capabilities
```jsx
import Picload from 'picload'
import myPicture from './images/picture.png'
import myPicture_min from './images/picture_min.png'

const App = () => {
  return (
    <div style={{width: '80px', height: '80px'}}>
      <Picload src={myPicture} placeholder={myPicture_min} alt='picture' className='my-image'/>
    </div>
  )
};

export default App;
```


## options
- <h3>Placeholder</h3>
Suppose a user opens your website and wants to view someone's profile. The photos in the user's profile are relatively large and the user has to wait a few seconds for the photos to load. What we can do here is to pre-prepare the thumbnails of the original photos and display them before the original photo is loaded (due to their very small size they load much faster)
- **usage** <br>
It is very easy to use and according to the source code below.
First we import the original photo and thumbnail ...
```jsx
import Picload from 'picload';
import Mountain from './images/mountain.jpeg';
import Mountin_min from './images/mountin_min.jpeg';

const App = () => {
    return(
        <div>
            <Picload src={Mountain} placeholder={Mountin_min} />
        </div>
    )
};

export default App;
```
<hr>

- <h3>Random color</h3>
> _randomColor : 'color'_

Before loading images, place a random color in the selected range (dark & light & any) instead of the image <br>
The randomColor value should be the color range you want

- **usage** <br>
```jsx
const myConfig = {
    randomColor: 'dark'
}
<Picload src={Lorem} config={myConfig} />
// or
<Picload src={Lorem} config={{randomColor: 'any'}} />
```
> **_NOTE:_**  All options and settings of this library must be set in the (config) prop. except placeholder
<a id='color-ranges'></a>
- color ranges
    - dark :
    ["#606291", "#868C9F", "#05060B", "#E8CEC3", "#5B5867", "#083281", "#95120E", "#184E39", "#705400", "#401D87"]
    - light :
    ["#EBF1FF", "#589A23", "#FAFBFC", "#F2ECFE", "#7243D0", "#55D8C1", "#FF6FB5", "#FCF69C", "#FFD59E", "#069A8E"]
    - any :
    A combination of both
<hr>

<a id='color'></a>
- <h3>Color</h3>
> _color : 'color'_

Instead of choosing a random color, choose what color to display before the image is loaded
- **usage** <br>
```jsx
<Picload src={linux} config={{ color: '#212526' }} />
```

<hr>

- <h3>Progress</h3>
> _progress : 'progress type'_

Beautiful animations, before the image is loaded

- **usage** <br>
First you need to import the css file of the animation you want
```jsx
import "picload/dist/progress-ripple.css"
```
Now you can use it
```jsx
<Picload src={linux} config={{ progress: 'circles' }} />
```
- <h3>progress animations</h3>

| Name          | Relevant css file                 |
| ------------- | -------------                      |
| circles       | picload/dist/progress-circles.css  |
| ring          | picload/dist/progress-ring.css     |
| ripple        | picload/dist/progress-ripple.css   |
| spinner       | picload/dist/progress-spinner.css  |
| roller        | picload/dist/progress-roller.css   |

- <h3>progress color</h3>
> _progressColor : 'color'_

You can set the color of progress
```jsx
const myConfig = {
  progress: 'spinner',
  progressColor: '#f1f1f1'
}
<Picload src={myImage} config={myConfig} />
```
- <h3>progress background</h3>
> _progressBg : 'color'_

You can set the background color of progress
```jsx
const myConfig = {
  progress: 'spinner',
  progressColor: '#f1f1f1',
  progressBg: '#0d1117',
}
<Picload src={myImage} config={myConfig} />
```
- <h3>progress style</h3>
> _progressStyle : {style}_

you can style your progress. For example, you want to make it a little bigger:
```jsx
const myConfig = {
  progress: 'spinner',
  progressColor: '#f1f1f1',
  progressBg: '#0d1117',
  progressStyle: {
    transform: 'scale(1.2)'
  }
}
<Picload src={myImage} config={myConfig} />
```
- <h3>custom progress</h3>
> _progress : &lt;component /&gt;_
  
Can we add custom progress we made ourselves? <br>
Definitely yes! Just import that component and pass it to progress (in config)

```jsx
import myProgress from './myProgress'
```
```jsx
const myConfig = {
  progress: <myProgress />;
}
<Picload src={Mountain} config={myConfig}/>
```

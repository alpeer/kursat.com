import React, {Component, Fragment} from "react";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      article: {
          "img": "https://omergulcicek.com/img/javascript.png",
          "title": "Kişisel Web Sitesi",
          "date": "11/24/2019",
          "tags": [
            "html", "css", "javascript"
          ],
          "content": "<p>On the <a href='http://redux.js.org' target='_blank' rel='noopener noreferrer'>official Redux website</a> it says: <em>'Redux is a predictable state container for JavaScript apps.'</em>. It can be used standalone or in connection with libraries, like React and Angular, to manage state in JavaScript applications.</p><p>Redux adopted a handful of constraints from the Flux architecture but not all of them. It has Actions that encapsulate information for the actual state update. It has a Store to save the state, too. However, the Store is a singleton. Thus, there are not multiple Stores like there used to be in the Flux architecture. In addition, there is no single Dispatcher. Instead, Redux uses multiple Reducers. Basically, Reducers pick up the information from Actions and 'reduce' the information to a new state, along with the old state, that is stored in the Store. When state in the Store is changed, the View can act on this by subscribing to the Store.</p><pre><pre class='prism-code language-jsx' style='color: rgb(214, 222, 235); background-color: rgb(1, 22, 39); padding: 20px; overflow: auto; max-width: calc(100vw - 80px);'><div class='token-line' style='color: rgb(214, 222, 235);'><span class='token plain'>View </span><span class='token operator' style='color: rgb(127, 219, 202);'>-</span><span class='token operator' style='color: rgb(127, 219, 202);'>&gt;</span><span class='token plain'> Action </span><span class='token operator' style='color: rgb(127, 219, 202);'>-</span><span class='token operator' style='color: rgb(127, 219, 202);'>&gt;</span><span class='token plain'> </span><span class='token function' style='color: rgb(130, 170, 255);'>Reducer</span><span class='token punctuation' style='color: rgb(199, 146, 234);'>(</span><span class='token plain'>s</span><span class='token punctuation' style='color: rgb(199, 146, 234);'>)</span><span class='token plain'> </span><span class='token operator' style='color: rgb(127, 219, 202);'>-</span><span class='token operator' style='color: rgb(127, 219, 202);'>&gt;</span><span class='token plain'> Store </span><span class='token operator' style='color: rgb(127, 219, 202);'>-</span><span class='token operator' style='color: rgb(127, 219, 202);'>&gt;</span><span class='token plain'> View</span></div></pre></pre><p>So why is it called Redux? Because it combines the two words Reducer and Flux. The abstract picture of Redux should be imaginable now. The state doesnt live in the View anymore, it is only connected to the View. What does connected mean? It is connected on two ends, because it is part of the unidirectional data flow. One end is responsible to trigger an Action to which updates the state eventually and the second end is responsible to receive the state from the Store. Therefore, the View can update accordingly to state changes but can also trigger state changes. The View, in this case, would be React, but Redux can be used with any other library or standalone as well. After all, it is only a state management container.</p><h3 id='actions'><a href='#actions' target='_blank' rel='noopener noreferrer' aria-label='actions permalink' class='anchor'><svg height='0' width='0'></svg></a>Action(s)</h3><p>An action in Redux is a JavaScript object. It has a type and an optional payload. The type is often referred to as <strong>action type</strong>. While the type is a string literal, the payload can be anything from a string to an object.</p><p>In the beginning your playground to get to know Redux will be a Todo application. For instance, the following action in this application can be used to add a new todo item:</p>"
        }
    };
  }

  render() {
    const {article} = this.state;
    return (
      <Fragment>
        <h1>{article.title}</h1>

        <div dangerouslySetInnerHTML={{__html: article.content}}></div>
      </Fragment>
    );
  }
}
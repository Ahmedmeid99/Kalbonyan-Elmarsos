import { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import "./style/quotes-app.css";

import {
  Route, //select the path and eny component will render
  BrowserRouter, //contain the App component
  NavLink, // add class active to the link + add path to the link
  Link, //add path to the link
  useParams, // pass data to any component
  Switch, // naver render two component in the same time onley the first path
  Redirect, // add new path
  useHistory, //method to go to eny page using  path
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}
const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={"main"}>{props.children}</main>
    </>
  );
};
const MainNavigation = () => {
  return (
    <header className={"header"}>
      <div className={"logo"}>Great Quotes</div>
      <nav className={"nav"}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={"active"}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={"active"}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
const QuoteList = (props) => {
  return (
    <>
      <ul className={"list"}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};
const QuoteItem = (props) => {
  return (
    <li className={"item"}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
const HighlightedQuote = (props) => {
  return (
    <figure className={"quote"}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};
const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const history = useHistory();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    history.push("/quotes");
    // optional: Could validate here
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={"form"} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={"loading"}>
            <LoadingSpinner />
          </div>
        )}

        <div className={"control"}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={"control"}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={"actions"}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={"comments"}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={"form"} onSubmit={submitFormHandler}>
      <div className={"control"} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={"actions"}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};
const CommentsList = (props) => {
  return (
    <ul className={"comments"}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};
const CommentItem = (props) => {
  return (
    <li className={"item"}>
      <p>{props.text}</p>
    </li>
  );
};

const NotFound = () => {
  return (
    <div className="centered">
      <p>Page not found!</p>
    </div>
  );
};
const NoQuotesFound = () => {
  return (
    <div className={"noquotes"}>
      <p>No quotes found!</p>
      <a className="btn">Add a Quote</a>
    </div>
  );
};
const LoadingSpinner = () => {
  return <div className={"spinner"}></div>;
};
const Card = (props) => {
  return <div className={"card"}>{props.children}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

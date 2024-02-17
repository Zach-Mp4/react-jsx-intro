const App = () => (
    <div>
        <Tweet username="yes" date="10/27/2023" message="I LOVE PEOPLE" />
        <FirstComponent />
        <NamedComponent name="Joe Mama" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));
const App = () => (
    <div>
        <Tweet username="yes" date="10/27/2023" message="I LOVE PEOPLE" />
        <Tweet username="joe" date="03/24/2021" message="Just watched the bear" />
        <Tweet username="draco" date="10/08/2000" message="Where this dude harry at" />

    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));
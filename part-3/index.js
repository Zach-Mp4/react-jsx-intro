const App = () => (
    <div>
        <Person name="JoesephTheConquerer" age="23" hobbies={['basketball', 'video games', 'art']} />
        <Person name="jesus" age="16" hobbies={['wine', 'water', 'crosses']} />
        <Person name="Dignan" age="25" hobbies={['destruction', 'arson', 'chaos']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));
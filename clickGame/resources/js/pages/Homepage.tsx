export default function Homepage(props: any) {
    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome to Click Game!</h1>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    );
}
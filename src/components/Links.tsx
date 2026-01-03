function Links({ ref, label }: { ref: string; label: string }) {
    return (
        <li>
            <a href={`/${ref}`} className="px-3 py-2 capitalize">
                {label}
            </a>
        </li>
    );
}

export default Links;

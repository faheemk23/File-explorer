import React, { useState } from "react";

import "./Explorer.css";

export default function Explorer({ explorer }) {
  const [showItems, setShowItems] = useState(false);
  let { id, name, isFolder, items } = explorer;

  if (isFolder) {
    return (
      <div>
        <div className="pointer" onClick={() => setShowItems((prev) => !prev)}>
          📁{name}
        </div>
        {showItems && (
          <div className="items">
            {items.map((explorer) => (
              <Explorer key={explorer.id} explorer={explorer} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <div>📄{name}</div>
      </div>
    );
  }
}

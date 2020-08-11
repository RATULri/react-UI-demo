import React from 'react';

import grid from "../../assets/grid.png";
import search from "../../assets/loupe.png"

function Searchbar(){
    return (
    <div class="row">
      <div class="col-1 mt-3 mr-2 ml-2">
        <button type="input" className="btn btn-sm btn-outline-secondary rounded">
          <img src={grid} alt="" height="15" />
        </button>
      </div>

      <div class="col-10 mt-3">
        <div class="input-group">
          <div class="input-group">

            <input class="form-control form-control-sm border-right-0" type="text" placeholder="Search" style={{webkitBoxShadow: "none", mozBoxShadow: "none", boxShadow: "none"}}/>

            <span class="input-group-append">
              <div class="input-group-text bg-transparent">
                <img src={search} alt="" height="15" />
              </div>
            </span>

          </div>
        </div>
      </div>
    </div>
    );
}

export default Searchbar;
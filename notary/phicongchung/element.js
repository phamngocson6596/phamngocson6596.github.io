import {LitElement, html} from 'lit-element';

export class MyElement extends LitElement {


    render() {
        return html`
        <div class="w3-container w3-border w3-padding-large" style="width: 50%;margin: auto; margin-top: 50px;">
            <h1>Danh mục hồ sơ</h1>

            <div class="w3-card hoso">
                <div class="w3-cell-row">
                    <div class="w3-cell"><p class="w3-padding-large">Hợp đồng mua bán</p></div>
                    <div class="w3-cell w3-button close-hoso" style="width: 10%;"><i class="fas fa-times" ></i></div>
                </div>
            </div>
            <div style="padding-top: 15px;">
                <input type="button" class="w3-btn w3-padding w3-border" value="Thêm hồ sơ">
            </div>
        </div>
        `;
      }
}

customElements.define('my-element', MyElement);
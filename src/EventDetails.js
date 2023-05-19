import Container from 'react-bootstrap/Container';
import Home from './Home';

function EventDetails() {
    return (
        <Container>
            <Home></Home>
        <div>
            <h2>70's Throwback Disco Party!! </h2>

            <h3>You don't want to miss a night of living in the 70's!</h3>
            <div>
            <p>Come spend a night in this radical decade by celebrating with a live DJ!</p></div>
               <div> <p>Enjoy music from the 70's, a 70's trivia game, refreshments, and more!</p></div>
               
            <div class="event-details-where">
                <div class="event-when">
                    <div class="event-icon">
                        <img width="20" height="20" src="https://assets.website-files.com/624380709031623bfe4aee60/624380709031622c234aee7c_clock-icon.svg"
                        loading="lazy" alt="icon-1x1-xxsmall"></img>
                    </div>
                    <div><b>WHEN</b></div>
                </div>
                <div class="event-time">
                    <div>Friday, June 2, 2023</div>
                    
                    <div>7:00 PM to 10:00 PM</div>
                </div>
                <div><b>WHERE</b></div>
                <div>Xhilarate | 2323 Happy Lane Paradise, CA </div>
                <div><b>PRICE:</b>$20 per person</div>
            </div>
        </div>


        <div>
            <h2>Black Tie Event</h2>

            <h3>Dress your best and come join the rest at this sophisticated affair!</h3>
            <div><p>This elegant event will present an enjoyable evening with dancing, dinner, and delight.</p></div>
            <div><p>There will also be a short stand up comedian performance you won't want to miss!</p></div>
            <div class="event-details-where">
                <div class="event-when">
                    <div class="event-icon">
                        <img width="20" height="20" src="https://assets.website-files.com/624380709031623bfe4aee60/624380709031622c234aee7c_clock-icon.svg"
                        loading="lazy" alt="icon-1x1-xxsmall"></img>
                    </div>
                    <div><b>WHEN</b></div>
                </div>
                <div class="event-time">
                    <div>Friday, June 16, 2023</div>
                    
                    <div>7:00 PM to 10:00 PM</div>
                </div>
                <div><b>WHERE</b></div>
                <div>Celebration Nation | 645 Turtle Bay Way Redding, CA </div>
                <div><b>PRICE:</b>$25 per person</div>
            </div>

        </div>

        <div>
            <h2>A Night in Paris</h2>
            <h3>Take a foreign vacation in the dreamy city of Paris!</h3>
            <div></div>

            <div class="event-details-where">
                <div class="event-when">
                    <div class="event-icon">
                        <img width="20" height="20" src="https://assets.website-files.com/624380709031623bfe4aee60/624380709031622c234aee7c_clock-icon.svg"
                        loading="lazy" alt="icon-1x1-xxsmall"></img>
                    </div>
                    <div><b>WHEN</b></div>
                </div>
                <div class="event-time">
                    <div>Friday, June 30, 2023</div>
                    
                    <div>7:00 PM to 10:00 PM</div>
                </div>
                <div><b>WHERE</b></div>
                <div>Moonlight Mirage | 1919 Riverside Pkwy Magnolia, CA </div>
                <div><b>PRICE:</b>$25 per person</div>
            </div>
        </div>
        </Container>
    )
}

export default EventDetails;
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.scss',
                './home-page.component.scss']
})

export class HomePageComponent {

    errorMsg: string[];

    placeholder = 'Your Url';
    disabled = false;
    loggedIn = false;
    subscriptionResponse = undefined;
    subscriptions = {
        beta_queue: false,
        newsletter: true,
    };
    emailResponse = '';
    emailError = false;

    constructor(
        private router: Router
    ) {
    }

    openDemoVideo() {
        window.location.href = 'https://tracemap.info/demo.mp4';
    }

    scrollToID(id_name: string) {
        const id = '#' + id_name;
        const target = document.querySelector(id);
        window.scrollTo( 0, target['offsetTop']);
    }

    navigate(location: string): void {
        this.router.navigate([location]);
    }
}

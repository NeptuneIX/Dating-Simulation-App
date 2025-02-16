import { Component, input } from '@angular/core';
import { Member } from '../../_models/member';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  faUser = faUser;
  faHeart = faHeart;
  faEnvelope = faEnvelope;
  member = input.required<Member>();


}

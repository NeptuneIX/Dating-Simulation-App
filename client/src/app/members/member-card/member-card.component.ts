import { Component, computed, inject, input } from '@angular/core';
import { Member } from '../../_models/member';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { LikesService } from '../../_services/likes.service';
import { PresenceService } from '../../_services/presence.service';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  private likeService = inject(LikesService);
  private presenceService = inject(PresenceService);
  faUser = faUser;
  faHeart = faHeart; 
  faEnvelope = faEnvelope;
  member = input.required<Member>();
  hasLiked = computed(() => this.likeService.likedIds().includes(this.member().id));
  isOnline = computed(() => this.presenceService.onlineUsers().includes(this.member().userName));

  toggleLike() {
    this.likeService.toggleLike(this.member().id).subscribe({
      next: () => {
        if(this.hasLiked()) {
          this.likeService.likedIds.update(ids => ids.filter(x => x != this.member().id))
        } else {
          this.likeService.likedIds.update(ids => [...ids, this.member().id])
        }

      }
    });
  }

}

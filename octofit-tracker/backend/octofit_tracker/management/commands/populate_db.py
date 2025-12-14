from django.core.management.base import BaseCommand
from octofit_tracker.models import Team, User, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data in correct order to avoid FK/cascade issues
        Leaderboard.objects.all().delete()
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel', description='Marvel superheroes')
        dc = Team.objects.create(name='DC', description='DC superheroes')

        # Create users
        spiderman = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel, is_superhero=True)
        ironman = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel, is_superhero=True)
        wonderwoman = User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc, is_superhero=True)
        batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc, is_superhero=True)

        # Create activities
        Activity.objects.create(user=spiderman, activity_type='Running', duration_minutes=30, date=timezone.now().date())
        Activity.objects.create(user=ironman, activity_type='Cycling', duration_minutes=45, date=timezone.now().date())
        Activity.objects.create(user=wonderwoman, activity_type='Swimming', duration_minutes=60, date=timezone.now().date())
        Activity.objects.create(user=batman, activity_type='Yoga', duration_minutes=40, date=timezone.now().date())

        # Create workouts
        workout1 = Workout.objects.create(name='Super Strength', description='Strength training for superheroes')
        workout2 = Workout.objects.create(name='Agility Boost', description='Agility and flexibility workout')
        workout1.suggested_for.set([spiderman, ironman])
        workout2.suggested_for.set([wonderwoman, batman])

        # Create leaderboard
        Leaderboard.objects.create(user=spiderman, score=100, rank=1)
        Leaderboard.objects.create(user=ironman, score=90, rank=2)
        Leaderboard.objects.create(user=wonderwoman, score=80, rank=3)
        Leaderboard.objects.create(user=batman, score=70, rank=4)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))

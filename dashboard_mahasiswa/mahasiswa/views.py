from django.db.models import Count
from django.shortcuts import render
from .models import Mahasiswa
import json

def dashboard(request):
    mahasiswa = Mahasiswa.objects.all()
    jurusan_data = list(Mahasiswa.objects.values('jurusan').annotate(count=Count('jurusan')))
    jurusan_data_json = json.dumps([{'name': item['jurusan'], 'y': item['count']} for item in jurusan_data])
    context = {
        'mahasiswa': mahasiswa,
        'jurusan_data_json': jurusan_data_json,
    }
    return render(request, 'mahasiswa/dashboard.html', context)
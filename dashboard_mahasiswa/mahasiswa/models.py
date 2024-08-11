from django.db import models

class Mahasiswa(models.Model):
    nama = models.CharField(max_length=100)
    nim = models.CharField(max_length=20, unique=True)
    jurusan = models.CharField(max_length=50)
    ipk = models.FloatField()

    def __str__(self):
        return self.nama
